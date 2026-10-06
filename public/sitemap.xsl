<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap — Medical Marijuana Card Santa Ana</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
            background: linear-gradient(180deg, #f0fdfa 0%, #f8fafc 40%, #fff7ed 100%);
            color: #0f172a;
            min-height: 100vh;
            padding: 2rem 1rem 3rem;
          }
          .wrap { max-width: 960px; margin: 0 auto; }
          header {
            background: linear-gradient(135deg, #115e59, #0f766e);
            color: #fff;
            border-radius: 1.25rem;
            padding: 1.75rem 2rem;
            box-shadow: 0 12px 40px -12px rgb(15 118 110 / 0.45);
            margin-bottom: 1.5rem;
          }
          header h1 {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          header p {
            margin-top: 0.5rem;
            font-size: 0.9375rem;
            color: rgb(204 251 241 / 0.9);
            line-height: 1.5;
          }
          .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }
          .pill {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            background: #fff;
            border: 1px solid #99f6e4;
            color: #115e59;
            font-size: 0.8125rem;
            font-weight: 600;
            padding: 0.4rem 0.85rem;
            border-radius: 9999px;
            box-shadow: 0 1px 3px rgb(15 23 42 / 0.06);
          }
          .card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 4px 24px -4px rgb(15 118 110 / 0.12);
          }
          table { width: 100%; border-collapse: collapse; }
          thead { background: linear-gradient(90deg, #f0fdfa, #fff); }
          th {
            text-align: left;
            font-size: 0.6875rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #64748b;
            padding: 0.875rem 1.25rem;
            border-bottom: 1px solid #e2e8f0;
          }
          td {
            padding: 0.875rem 1.25rem;
            border-bottom: 1px solid #f1f5f9;
            font-size: 0.875rem;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f0fdfa; }
          a {
            color: #0f766e;
            font-weight: 600;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover { color: #115e59; text-decoration: underline; }
          .priority-high { color: #ea580c; font-weight: 700; }
          .priority-mid { color: #0f766e; font-weight: 600; }
          .priority-low { color: #64748b; }
          .freq {
            display: inline-block;
            background: #f1f5f9;
            color: #475569;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.2rem 0.55rem;
            border-radius: 0.375rem;
          }
          footer {
            margin-top: 1.25rem;
            text-align: center;
            font-size: 0.8125rem;
            color: #64748b;
          }
          footer a { font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <h1>XML Sitemap</h1>
            <p>
              Human-readable view for <strong>Medical Marijuana Card Santa Ana</strong>.
              Search engines read the raw XML — this page is for your review only.
            </p>
          </header>

          <div class="meta">
            <span class="pill">
              <xsl:value-of select="count(s:urlset/s:url)" /> URLs indexed
            </span>
            <span class="pill">Sitemap protocol 0.9</span>
          </div>

          <div class="card">
            <table>
              <thead>
                <tr>
                  <th style="width: 50%;">URL</th>
                  <th>Last modified</th>
                  <th>Change freq.</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <xsl:sort select="s:loc" />
                  <tr>
                    <td>
                      <xsl:variable name="afterHost" select="substring-after(s:loc, '://')" />
                      <a>
                        <xsl:attribute name="href">
                          <xsl:choose>
                            <xsl:when test="contains($afterHost, '/')">
                              <xsl:value-of select="concat('/', substring-after($afterHost, '/'))" />
                            </xsl:when>
                            <xsl:otherwise>/</xsl:otherwise>
                          </xsl:choose>
                        </xsl:attribute>
                        <xsl:value-of select="s:loc" />
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="substring(s:lastmod, 1, 10)" />
                    </td>
                    <td>
                      <span class="freq">
                        <xsl:value-of select="s:changefreq" />
                      </span>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="s:priority &gt;= 0.8">
                          <span class="priority-high">
                            <xsl:value-of select="s:priority" />
                          </span>
                        </xsl:when>
                        <xsl:when test="s:priority &gt;= 0.6">
                          <span class="priority-mid">
                            <xsl:value-of select="s:priority" />
                          </span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-low">
                            <xsl:value-of select="s:priority" />
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>
            <p>
              Generated for crawlers at
              <a href="/sitemap.xml">/sitemap.xml</a>
              · Referenced in <a href="/robots.txt">robots.txt</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
