import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { TextVariants } from "styles/chakra/Text";
import { NotificationDetails } from "./NotificationDetailsModal";
import { NotificationData } from "./NotificationManager";

import CloseIcon from "assets/icons/close.svg";
import InfoIcon from "assets/icons/info.svg";
import SuccessIcon from "assets/icons/success.svg";
import WarningIcon from "assets/icons/warning.svg";
import ErrorIcon from "assets/icons/error.svg";


function isElapsed(notif: NotificationData) {
  if (notif.startShowing == null) return true;
  return (new Date().getTime() - notif.startShowing) / 1000 < 5;
}

export const NotificationItem = ({ notification, key, showModalDetails, onHide }: {
  notification: NotificationData;
  key: string;
  showModalDetails: (details: NotificationDetails[]) => void;
  onHide: (key: string) => void;
}) => {

  useEffect(() => {
    if (!notification.permanent) {
      const interval = setInterval(() => {
        if (isElapsed(notification)) {
          onHide(key);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [key, notification, onHide]);

  const { notificationColor, iconSrc } = useMemo(() => {
    if (notification.type === "success")
      return { iconSrc: SuccessIcon, notificationColor: "var(--color-green)" };
    if (notification.type === "error")
      return { iconSrc: ErrorIcon, notificationColor: "var(--color-red)" };
    if (notification.type === "warning")
      return { iconSrc: WarningIcon, notificationColor: "var(--color-yellow)" };
    if (notification.type === "info")
      return { iconSrc: InfoIcon, notificationColor: "var(--color-blue)" };


    return { iconSrc: WarningIcon, notificationColor: "var(--color-red)" };
  }, [notification.type]);

  return (

    <Flex w="100%" bgColor="white" gap="1rem" p=".5rem 1rem" border="2px solid black" borderRadius="1rem">
      {notification.closable && <Image src={CloseIcon} w="1rem" h="1rem" cursor="pointer" onClick={() => onHide(key)} />}
      <Image src={iconSrc} w="1rem" h="1rem" />
      <Flex direction="column" gap=".5rem" bgColor={notificationColor}>
        <Text variant={TextVariants.subtitle}>{notification.title}</Text>
        {notification.message && <Text>{notification.message}</Text>}
        {(notification.enableRefreshPanel || notification.details?.length) &&
          <Flex>
            {notification.enableRefreshPanel && (
              <Link
                onClick={() => {
                  window.location.reload();
                }}
              >
                refresh
              </Link>
            )}
            {notification.details?.length && (
              <Text
                onClick={() => {
                  showModalDetails(notification.details!);
                }}
              >
                dettagli
              </Text>
            )}
          </Flex>
        }
      </Flex>
    </Flex>
  );
};
