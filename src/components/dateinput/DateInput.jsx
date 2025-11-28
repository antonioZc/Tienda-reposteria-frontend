import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dateinput.css";

export default function DateInput() {
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchUnavailableDates = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/dates");
        const data = await res.json();

        // Convertir a formato Date
        const formatted = data.map(
          (item) => new Date(item.fecha.split("T")[0] + "T00:00:00")
        );
        setUnavailableDates(formatted);
      } catch (error) {
        console.error("Error al obtener fechas:", error);
      }
    };

    fetchUnavailableDates();
  }, []);

  // 📅 Calcular fecha mínima: 3 días después de hoy
  const minDate = (() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  })();

  // 🔹 Función para deshabilitar fechas no disponibles
  const isDateDisabled = (date) => {
    return unavailableDates.some(
      (d) => d.toDateString() === date.toDateString()
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ fontWeight: "500" }}>Selecciona una fecha:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={minDate}
        filterDate={(date) => !isDateDisabled(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Elige una fecha"
        className="custom-datepicker"
      />
    </div>
  );
}
