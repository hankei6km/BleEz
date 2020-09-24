import React, { useState } from "react";
import "./styles.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Ble from "./components/Ble";
import Gauge from "./components/Gauge";
import Value from "./components/Value";

const serviceId: string = "heart_rate";
const characteristicId: string = "heart_rate_measurement";
const decoder: (dataValue: DataView) => number = (dataValue) =>
  dataValue.getUint8(1) / 1;
const gaugeLabel: string = "BPM";
const gaugeMin: number = 40;
const gaugeMax: number = 120;

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [val, setVal] = useState(0);
  const [errText, setErrText] = useState("");
  return (
    <div className="App">
      <Box>
        <Box>
          <Gauge
            labels={[gaugeLabel]}
            min={gaugeMin}
            max={gaugeMax}
            val={val}
          />
        </Box>
        <Box mt={-3} mb={3}>
          {/* 位置合わせ雑. Value は Gauge に含める? */}
          <Value val={val} isConnected={isConnected} />
        </Box>
        <Box>
          <Ble
            serviceId={serviceId}
            characteristicId={characteristicId}
            onConnected={() => setIsConnected(true)}
            onDisconnected={() => setIsConnected(false)}
            onChanged={(dataValue) => setVal(decoder(dataValue))}
            onError={(err) => setErrText(err.message)}
          />
        </Box>
        <Box py={2}>
          <Typography color="error">{errText}</Typography>
        </Box>
      </Box>
    </div>
  );
}
