function hasAnyParams(p: URLSearchParams): boolean {
  return Array.from(p.keys()).length > 0;
}

function hasUtmSourceCaseInsensitive(p: URLSearchParams): boolean {
  for (const key of p.keys()) {
    if (key.toLowerCase() === "utm_source") return true;
  }
  return false;
}

/**
 * Copies marketing query params from the current page onto an outbound URL (ticket / checkout).
 *
 * Forwards:
 * - Any `utm_*` (e.g. `utm_source`, `utm_medium`, …)
 * - Shorthand `source` / `src` (many campaigns use `?source=wechat` instead of `utm_source`)
 *
 * If the page has `source` or `src` but no `utm_source`, we also set `utm_source` on the
 * outbound URL so checkout / GA-style tools still see a source.
 *
 * Landing values win over same-name params already on the target URL.
 */
export function appendCurrentPageUtmParams(url: string): string {
  if (typeof window === "undefined") return url;

  const current = new URLSearchParams(window.location.search);
  const outParams = new URLSearchParams();

  current.forEach((value, key) => {
    const k = key.toLowerCase();
    if (k.startsWith("utm_")) {
      outParams.append(key, value);
    }
    if (k === "source" || k === "src") {
      outParams.set(key, value);
    }
  });

  if (!hasUtmSourceCaseInsensitive(outParams)) {
    const fromShorthand = current.get("source") ?? current.get("src");
    if (fromShorthand) {
      outParams.set("utm_source", fromShorthand);
    }
  }

  if (!hasAnyParams(outParams)) return url;

  try {
    const out = new URL(url, window.location.href);
    outParams.forEach((value, key) => {
      out.searchParams.set(key, value);
    });
    return out.toString();
  } catch {
    return url;
  }
}
