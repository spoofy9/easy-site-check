async function query(url: string) {
  const startTime = Date.now();
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "Bun Site checker",
      "Accept": "text/html",
    },
  });
  if (!response.ok) {
    return { status: false, time: Date.now() - startTime, code : response.status };
  }
  return { status: true, time: Date.now() - startTime, code : response.status };
}

export async function check(site: string) {
  const result = await query(site);
  const now = new Date().toLocaleString("ru-RU", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  console.log(`[${now}] ${site} ${result.status ? 'OK' : 'FAIL'}/${result.code}/${result.time}ms`);
  return result;
}
