import React from 'react';
import { Button, Tooltip } from "@fluentui/react-components";
import { ArrowStepOutRegular, ArrowStepOverRegular } from "@fluentui/react-icons";

const Positionwithtooltip = () => {
  const positions = [
    ["above-start", <ArrowStepOverRegular transform="rotate(-90)" />],
    ["above", <ArrowStepOutRegular />],
    ["above-end", <ArrowStepOverRegular transform="rotate(90) scale(-1 1)" />],

    ["before-top", <ArrowStepOverRegular transform="scale(-1 1)" />],
    ["before", <ArrowStepOutRegular transform="rotate(-90)" />],
    ["before-bottom", <ArrowStepOverRegular transform="rotate(180)" />],

    ["after-top", <ArrowStepOverRegular />],
    ["after", <ArrowStepOutRegular transform="rotate(90)" />],
    [
      "after-bottom",
      <ArrowStepOverRegular transform="rotate(180) scale(-1 1)" />,
    ],

    [
      "below-start",
      <ArrowStepOverRegular transform="rotate(-90) scale(-1 1)" />,
    ],
    ["below", <ArrowStepOutRegular transform="rotate(180)" />],
    ["below-end", <ArrowStepOverRegular transform="rotate(90)" />],
  ];

  return (
    <div
      style={{
        display: "grid",
        margin: "24px 128px",
        gap: "4px",
        gridTemplateAreas:
          '".             above-start   above         above-end     .            "' +
          '"before-top    .             .             .             after-top    "' +
          '"before        .             .             .             after        "' +
          '"before-bottom .             .             .             after-bottom "' +
          '".             below-start   below         below-end     .            "',
      }}
    >
      {positions.map(([position, icon]) => (
        <Tooltip
          key={position}
          withArrow
          positioning={position}
          content={position}
          relationship="label"
        >
          <Button
            icon={icon}
            size="large"
            style={{ gridArea: position, minWidth: "64px", height: "64px" }}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default Positionwithtooltip;
