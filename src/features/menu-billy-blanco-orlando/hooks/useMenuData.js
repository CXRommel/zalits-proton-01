import { useState, useEffect } from "react";
import clientData from "#src/data/client.json";

export function useMenuData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simula carga desde API o archivo local
      setTimeout(() => {
        setData(clientData);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
