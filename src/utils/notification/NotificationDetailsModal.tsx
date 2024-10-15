import React, { useEffect } from "react";

import { Button, Checkbox, Flex, Modal, Text } from "@chakra-ui/react";
import { copyToClipboardJson, downloadJson } from "utils/reportsHelper";

export interface NotificationDetails {
  key: string;
  text: string;
  data: string;
  severity: string;
  selected: boolean;
  traceId: string;
}

export interface NotificationDetailsProps {
  details: NotificationDetails[] | null;
  onHide: () => void;
}



export interface MessageDetailsModalState {
  selected: NotificationDetails[];
  allSelected: boolean;
}

export const NotificationDetailsModal = ({ details, onHide }: NotificationDetailsProps) => {
  const [state, setState] = React.useState<MessageDetailsModalState>({
    selected: [],
    allSelected: false,
  });

  useEffect(() => {
    setState((s) => ({ ...s, selected: [], allSelected: false }));
  }, [details]);




  function handleSelectAll() {
    setState((s) => {
      if (s.allSelected)
        return {
          selected: [],
          allSelected: false,
        };
      return {
        selected: details ?? [],
        allSelected: true,
      };
    });
  }

  const onItemCheck = (item: NotificationDetails, sel: boolean) => {
    setState((s) => {
      let updated = s.selected;

      if (sel) updated = [...s.selected, item]
      else updated = s.selected.filter(selected => selected.key !== item.key)

      return {
        selected: updated,
        allSelected: updated.length === details!.length,
      };
    });
  }

  const generateJSON = () => {
    const toExport = state.selected.map((item) => {
      return {
        title: item.text,
        message: item.data,
      };
    });
    return JSON.stringify(toExport);
  }

  return (
    <Modal
      isOpen={details !== null}
      onClose={() => onHide()}
    >
      <div >
        <h3>
          dettagli ({details ? details.length : 0})
        </h3>
        <Button
          onClick={() => onHide()}
        >BACK</Button>
      </div>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <p style={{ margin: "5px" }}>info</p>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <Checkbox
              checked={state.allSelected}
              size="large"
              rounded="small"
              onChange={() => handleSelectAll()}
            />
            Selezione tutto
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            {details?.map((message) => (
              <Flex direction="column">
              <Checkbox
                checked={message.selected}
                onChange={(e) => onItemCheck(message, e.currentTarget.value === "true")}
              />
              <Text>{message.text}</Text>
              <Text>{message.data}</Text>
            </Flex>
            ))}
          </div>
        </div>
      </div>
      <Flex>
        {state.selected.length > 0 && (
          <Button
            onClick={() => downloadJson(generateJSON(), "report_" + Date.now() + ".json")}
            disabled={!state.selected.length}
          >Export</Button>
        )}
        <Button
          onClick={() => copyToClipboardJson(generateJSON())}
          disabled={!state.selected.length}
        >Copy</Button>
      </Flex>
    </Modal>
  );
};
