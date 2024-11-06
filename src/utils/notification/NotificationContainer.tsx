import { useEffect, useState } from "react";
import { NotificationDetails, NotificationDetailsModal } from "./NotificationDetailsModal";
import { NotificationItem } from "./NotificationItem";
import { notificationManager, NotificationRequestersMap, NotificationsChangeHandler } from "./NotificationManager";
import { FullPageModal } from "utils/layout/FullPageModal";
import { AppSpacings } from "styles/types/primitives.types";

export const NotificationContainer = () => {
  const [state, setState] = useState<{ notifications: NotificationRequestersMap }>({
    notifications: new Map(),
  });

  useEffect(() => {
    notificationManager.addChangeListener(handleStoreChange);
    return () => {
      notificationManager.removeChangeListener(handleStoreChange);
    };
  }, []);

  const handleStoreChange: NotificationsChangeHandler = (notifications) => {
    setState({
      notifications,
    });
  }

  const [details, setDetails] = useState<NotificationDetails[] | null>(null);

  const showModalDetails = (input: NotificationDetails[]) => {
    setDetails(input);
  };

  return (
    <>
      <NotificationDetailsModal details={details} onHide={() => {
        setDetails(null);
      }} />
      {state.notifications.size > 0 && <FullPageModal direction="column-reverse" alignItems="end" gap={AppSpacings[2]} p="2rem 1rem">
        {Array.from(state.notifications.entries()).map(([key, notificationData]) => (
          <NotificationItem
            notification={notificationData}
            key={key}
            onHide={() => notificationManager.remove(key)}
            showModalDetails={(details) => showModalDetails(details)}
          />
        ))}
      </FullPageModal>}
    </>
  );
};

export default NotificationContainer;
