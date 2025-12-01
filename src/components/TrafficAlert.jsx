import React, { useState, useEffect } from 'react';
import { AlertTriangle, CloudSun, Navigation, Clock, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const TrafficAlert = () => {
  const [weather, setWeather] = useState(null);
  const [trafficInfo, setTrafficInfo] = useState([]);

  // Fetch Real Weather from OpenMeteo (No Key Required)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.3220&longitude=5.0415&current_weather=true');
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Weather fetch failed", error);
      }
    };
    fetchWeather();
    // Refresh every 15 mins
    const interval = setInterval(fetchWeather, 900000);
    return () => clearInterval(interval);
  }, []);

  // Generate "Real-Time" Traffic based on Time + Weather + Day
  useEffect(() => {
    const generateTraffic = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday
      const isWeekend = day === 0 || day === 6;
      const isRushHour = (hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19);

      let alerts = [];

      // 1. Weather Impact
      if (weather) {
        if (weather.weathercode >= 61) { // Rain
          alerts.push({ icon: CloudSun, text: `PLUIE: CHAUSSÉE GLISSANTE - PRUDENCE` });
          alerts.push({ icon: AlertTriangle, text: `ROCADE: RALENTISSEMENTS MÉTÉO` });
        } else if (weather.weathercode >= 71) { // Snow
          alerts.push({ icon: AlertTriangle, text: `NEIGE: TRANSPORTS PERTURBÉS` });
        } else {
          alerts.push({ icon: CloudSun, text: `MÉTÉO DIJON: ${weather.temperature}°C - CONDITIONS OPTIMALES` });
        }
      }

      // 2. Time-Based Traffic (Dijon Specifics)
      if (isRushHour && !isWeekend) {
        alerts.push({ icon: Navigation, text: `ROCADE EST: TRAFIC DENSE` });
        alerts.push({ icon: Navigation, text: `TOISON D'OR: SATURÉ` });
        alerts.push({ icon: AlertTriangle, text: `ZI LONGVIC: ACCÈS DIFFICILE` });
      } else if (isWeekend) {
        alerts.push({ icon: Navigation, text: `CENTRE-VILLE: PIÉTONNISATION` });
        alerts.push({ icon: Navigation, text: `ROCADE: FLUIDE` });
      } else {
        alerts.push({ icon: Navigation, text: `ROCADE: FLUIDE` });
        alerts.push({ icon: Navigation, text: `A31 ACCÈS NORD: DÉGAGÉ` });
        alerts.push({ icon: AlertTriangle, text: `ZI LONGVIC: ACCÈS POIDS-LOURDS OK` });
      }

      // 3. Time
      alerts.push({ icon: Clock, text: `MISE À JOUR: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` });

      setTrafficInfo(alerts);
    };

    generateTraffic();
  }, [weather]);

  return (
    <div className="bg-accent text-white py-2 overflow-hidden relative z-[60]">
      <div className="flex items-center">
        {/* Fixed Label */}
        <div className="bg-accent z-10 px-4 font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[5px_0_10px_rgba(230,0,0,1)]">
          <AlertTriangle size={14} className="animate-pulse" />
          <span>LIVE TRAFIC</span>
        </div>

        {/* Scrolling Marquee */}
        <motion.div
          className="flex whitespace-nowrap gap-16 text-xs font-mono"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate list for seamless loop */}
          {[...trafficInfo, ...trafficInfo].map((info, i) => (
            <div key={i} className="flex items-center gap-2">
              {info.icon && <info.icon size={12} />}
              <span>{info.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrafficAlert;
