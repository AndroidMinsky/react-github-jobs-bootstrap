import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JobView() {
  let { id } = useParams();

  const BASE_URL = `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${id}.json`;

  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: { markdown: true },
      })
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  });

  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      {job.title} {job.created_at}
    </div>
  );
}
