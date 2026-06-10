# RIITS TRADING CO., LTD. 協京貿易公司

## Context

為 **RIITS TRADING CO., LTD.** 設計一個帶有永續環保概念的公司官網。  
公司從事紡織染料與助劑的貿易，持有 ISO 9001:2015、ISO 14001:2015、bluesign® 等環保認證，主打環境友善的染色解決方案。  
網站目標：向紡織業客戶展示產品系列、技術能力及永續承諾。

---

## 從 Box 擷取的公司資訊

| 項目 | 內容 |
|------|------|
| 公司名 | RIITS TRADING CO., LTD. |
| ZDHC ID | A431MZ88 |
| 認證 | ISO 9001:2015 · ISO 14001:2015 · bluesign® |
| 電話 | +886-2-2361-2328 / +886-2-2331-5877 |
| Email | riits@ms10.hinet.net |
| 現有網址 | www.riits.com.tw |

### 產品線（Goldenacid® / Goldenlan® / Goldenset® / Goldenaux®）

**酸性染料（Acid Dyes）— 尼龍/聚醯胺用**
- Goldenacid® L：均染型，淺色系，高日光牢度
- Goldenacid® HM：半縮絨型，均染性佳，色域寬
- Goldenacid® M：縮絨型，鮮豔，運動服適用，**不含金屬（Metal-free）**
- Goldenacid® SF：複合型，最高濕牢度，**環保（Ecofriendly）、不含金屬**
- Goldenacid® SPN：酸性反應型，中深色，高堅牢度
- Goldenset®：1:2 金屬複合改良型，中深色，超細纖維適用
- Goldenlan® K/S/2S：1:2 含金複合染料，高光牢度，汽車用布適用

**紡織助劑（Auxiliaries）— Goldenaux® 品牌**
- D-TP（均染劑）、PHS（pH 緩衝劑）、D-Q（皂洗劑）
- F-TWE（低溫鍵合固色劑）、ASF BS（環保固色劑，無苯酚/雙酚/甲醛，OEKO-TEX 100）
- F-PM（bluesign 認證環保泡沫清缸劑，節能減碳）
- PDF-NR02（低泡潤濕劑）、D-LVDN（兩性均染劑，COD ≤ 500，生物可分解）
- PD-MC200（螯合分散劑）、PD-FHB（浴中潤滑劑）

**分散染料（Disperse Dyes）** — 目錄另有檔案（260609 分散活頁），細節待補充

---

## 網站架構（Pages / Sections）

### 單頁滾動式設計（Single Page App）

1. **Hero / 首頁橫幅**  
   - 全螢幕背景：染色纖維/織物的抽象漸層影像（Unsplash 搜圖）  
   - 標題：RIITS TRADING CO., LTD. + 副標「Sustainable Dyeing Solutions」  
   - 認證 badge：ISO 9001 · ISO 14001 · bluesign® · ZDHC

2. **About Us / 關於我們**  
   - 公司簡介：專注紡織染料與助劑貿易，以永續環境為核心
   - 3 個核心價值卡片：品質（ISO 9001）、環境（ISO 14001）、創新

3. **Products / 產品系列**  
   - 分類 tab/accordion：  
     - Acid Dyes（酸性染料）→ Goldenacid® L / HM / M / SF / SPN  
     - Metal-Complex Dyes（含金染料）→ Goldenlan® K / S / 2S  
     - Modified Dyes（複合染料）→ Goldenset®  
     - Disperse Dyes（分散染料）  
     - Auxiliaries（助劑）→ Goldenaux® 系列  
   - 每個產品卡片：名稱、特性重點、應用範圍、環保標籤（Metal-free / Eco / bluesign）

4. **Sustainability / 永續承諾**  
   - 視覺化統計：認證數量、環保產品比例等  
   - 重點展示：bluesign® 認證、ZDHC 合規、OEKO-TEX 100、生物可分解助劑  
   - 減碳節能措施（如 F-PM 降低浴量、D-LVDN 生物可分解）

5. **Certifications / 認證**  
   - 認證卡片展示：ISO 9001:2015、ISO 14001:2015、bluesign®、ZDHC（ID: A431MZ88）

6. **Contact / 聯絡我們**  
   - 公司資訊：電話、Email、網址  
   - 聯絡表單（mock）

---

## 設計風格（永續環保概念）

- **色彩調性**：深森林綠 (#1B4332) + 自然白 (#F8FAF5) + 青草綠 (#40916C) + 金色點綴 (#D4A853，呼應「Golden」品牌)
- **字型**：無衍線現代感（Poppins / Inter）標題 + 細緻內文
- **視覺語言**：葉片、水波、織物紋路等自然元素；乾淨留白；微動畫
- **氛圍**：專業 B2B 紡織化工 + 清新環保，避免過於「化工感」

---

## 技術實作

### 檔案結構（多頁路由）
- `src/app/App.tsx` — Router 根節點，定義路由表
- `src/app/components/Navbar.tsx` — 固定導覽列，含語言切換（中/英）
- `src/app/components/Footer.tsx` — 頁尾
- `src/app/pages/Home.tsx` — 首頁（Hero + 快速亮點）
- `src/app/pages/About.tsx` — 關於我們
- `src/app/pages/Products.tsx` — 產品系列（含 tab/filter 切換）
- `src/app/pages/Sustainability.tsx` — 永續承諾
- `src/app/pages/Certifications.tsx` — 認證頁面
- `src/app/pages/Contact.tsx` — 聯絡我們

### 路由結構
```
/          → Home
/about     → About
/products  → Products
/sustainability → Sustainability
/certifications → Certifications
/contact   → Contact
```

### 套件
- `lucide-react` — 圖示（已有）
- `motion` — 滾動進場動畫
- Unsplash MCP — 搜尋染色纖維、永續紡織相關圖片

### 資料處理
- 使用者提供的產品資訊已從 Box PDF 萃取，以 TypeScript 常數定義於各 component 中
- 聯絡表單為純前端 mock（無後端）

---

## 已確認決策

| 項目 | 決定 |
|------|------|
| 語言 | **中英雙語**（每個頁面同時顯示中文與英文） |
| 頁面結構 | **多頁式路由**（react-router，每個區塊獨立頁面） |
| 公司中文名稱 | 使用者稍後提供，暫以英文 RIITS TRADING CO., LTD. 作為預留位置 |
| 分散染料 | 已列入 Products 頁面，細節用現有已知資訊呈現 |

---

## Verification

1. 在 Preview 中滾動所有區塊，確認版面在桌機（1280px）與手機（375px）都正常
2. 確認產品 tab 切換功能正常
3. 確認永續統計數字動畫、進場動畫正常
4. 確認 Navbar 捲動後固定，錨點跳轉正常
