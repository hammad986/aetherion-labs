"""
Complete Asset Generation Suite for Aetherion Labs
Builds all remaining project showcases:
- Smart Doc AI (4 assets)
- Nexus AI Ops (5 assets)
- AI Proposal Writer (2 assets)
- Image Toolkit Pro (6 assets)
- Advanced Video QA System (5 assets)
- OpenGraph Card (1 asset: src/app/opengraph-image.png)
"""

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from build_showcase_assets import (
    make_backdrop, draw_window_frame, draw_pill,
    f_reg, f_bold, f_mono, save_image
)

# -------------------------------------------------------------
# 1. SMART DOC AI
# -------------------------------------------------------------
def build_smart_doc_dashboard():
    base = make_backdrop(1920, 1080, glow_color=(99, 102, 241), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Smart Doc AI — Document Intelligence Platform", url="https://smart-doc.aetherionlabs.com/dashboard", dark=True)
    
    # Sidebar
    sb_w = 260
    draw.rectangle([wx + 1, top_y + 1, wx + sb_w, wy + wh - 1], fill=(13, 17, 28, 255))
    draw.line([wx + sb_w, top_y, wx + sb_w, wy + wh], fill=(35, 45, 65, 255), width=1)
    
    # Logo
    draw.rounded_rectangle([wx + 24, top_y + 24, wx + 56, top_y + 56], radius=8, fill=(99, 102, 241, 255))
    draw.text((wx + 34, top_y + 28), "D", font=f_bold(20), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 24), "Smart Doc AI", font=f_bold(16), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 44), "Document Intelligence", font=f_reg(11), fill=(148, 163, 184, 255))
    
    nav = [("Analytics & Metrics", True), ("Document Ingestion", False), ("Audit History", False), ("Zod Schema Studio", False), ("Orchestration Settings", False)]
    ny = top_y + 88
    for itm, act in nav:
        if act:
            draw.rounded_rectangle([wx + 16, ny, wx + sb_w - 16, ny + 38], radius=8, fill=(30, 41, 65, 255), outline=(55, 65, 95, 255), width=1)
            draw.text((wx + 36, ny + 9), itm, font=f_bold(13), fill=(165, 180, 252, 255))
        else:
            draw.text((wx + 36, ny + 9), itm, font=f_reg(13), fill=(148, 163, 184, 255))
        ny += 46
        
    # Main Content
    cx = wx + sb_w + 36
    cy = top_y + 28
    cw = ww - sb_w - 72
    
    draw.text((cx, cy), "Document Intelligence Overview", font=f_bold(24), fill=(255, 255, 255, 255))
    draw.text((cx, cy + 32), "LLM Vision Extraction • LangChain Fallback Routing • Strict Zod Verification", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # 4 Stat Cards
    card_y = cy + 76
    card_w = (cw - 48) // 4
    card_h = 105
    stats = [
        ("DOCUMENTS PROCESSED", "1,428", "99.2% extraction accuracy", (99, 102, 241, 255)),
        ("FIELDS EXTRACTED", "18,940", "Zero schema hallucinations", (16, 185, 129, 255)),
        ("AVERAGE LATENCY", "1.42s", "Multi-model fallback active", (6, 182, 212, 255)),
        ("VERIFIED RATE", "99.8%", "Zod-validated JSON output", (244, 114, 182, 255))
    ]
    for i, (lbl, val, sub, col) in enumerate(stats):
        kx = cx + i * (card_w + 16)
        draw.rounded_rectangle([kx, card_y, kx + card_w, card_y + card_h], radius=12, fill=(16, 22, 36, 255), outline=(40, 52, 75, 255), width=1)
        draw.text((kx + 18, card_y + 14), lbl, font=f_bold(11), fill=(100, 116, 139, 255))
        draw.text((kx + 18, card_y + 36), val, font=f_bold(22), fill=(255, 255, 255, 255))
        draw.text((kx + 18, card_y + 74), sub, font=f_reg(11), fill=col)
        
    # Split Bottom: Left Recent Ingestions (880px) + Right Parsed JSON Viewer (520px)
    b_y = card_y + card_h + 24
    b_h = wy + wh - b_y - 24
    left_w = cw - 530
    right_w = 510
    
    # Left Ingestion List
    draw.rounded_rectangle([cx, b_y, cx + left_w, b_y + b_h], radius=12, fill=(15, 20, 32, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((cx + 24, b_y + 18), "Live Document Ingestion Queue", font=f_bold(16), fill=(255, 255, 255, 255))
    draw_pill(draw, cx + left_w - 210, b_y + 16, "LangChain Engine Active", f_bold(11), bg=(99, 102, 241, 30), fg=(165, 180, 252, 255), border=(99, 102, 241, 255))
    
    # Ingestion items
    docs = [
        ("Vendor_Master_Services_Agmt.pdf", "Enterprise Contract", "18 Fields", "GPT-4-Vision", "99.8% Verified", (16, 185, 129, 255)),
        ("Q3_Financial_Audit_Report.pdf", "Financial Balance Sheet", "42 Fields", "Claude 3 Sonnet", "99.4% Verified", (16, 185, 129, 255)),
        ("AWS_Infrastructure_Billing.pdf", "Utility Invoice", "12 Fields", "GPT-4-Vision", "98.9% Verified", (16, 185, 129, 255)),
        ("Commercial_Lease_Exhibit_B.pdf", "Legal Document", "26 Fields", "Claude 3 Sonnet", "99.1% Verified", (16, 185, 129, 255)),
        ("Logistics_Bill_of_Lading_88.pdf", "Shipping Manifest", "15 Fields", "GPT-4-Vision", "97.6% Review", (251, 191, 36, 255)),
        ("Employee_Healthcare_Policy.pdf", "HR / Benefits", "31 Fields", "Claude 3 Sonnet", "99.7% Verified", (16, 185, 129, 255))
    ]
    dy = b_y + 60
    for title, cat, flds, model, st, st_col in docs:
        draw.rounded_rectangle([cx + 20, dy, cx + left_w - 20, dy + 56], radius=8, fill=(19, 26, 42, 255), outline=(35, 48, 70, 255), width=1)
        draw.text((cx + 34, dy + 10), title, font=f_bold(13), fill=(241, 245, 249, 255))
        draw.text((cx + 34, dy + 32), f"{cat}  •  {flds}  •  Model: {model}", font=f_reg(11), fill=(100, 116, 139, 255))
        draw_pill(draw, cx + left_w - 160, dy + 14, st, f_bold(10), bg=(*st_col[:3], 30), fg=st_col, border=st_col)
        dy += 66
        
    # Right Structured JSON Viewer
    rx = cx + left_w + 20
    draw.rounded_rectangle([rx, b_y, rx + right_w, b_y + b_h], radius=12, fill=(12, 16, 26, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((rx + 20, b_y + 18), "Zod-Validated JSON Payload", font=f_bold(14), fill=(165, 180, 252, 255))
    draw_pill(draw, rx + right_w - 110, b_y + 16, "ZOD PASS", f_bold(10), bg=(16, 185, 129, 30), fg=(52, 211, 153, 255))
    
    json_lines = [
        ("{\n", (255, 255, 255, 255)),
        ('  "document_id": "doc_99182x",\n', (148, 163, 184, 255)),
        ('  "schema": "ContractPayloadZod",\n', (148, 163, 184, 255)),
        ('  "vendor": "Acme Industrial Labs",\n', (52, 211, 153, 255)),
        ('  "effective_date": "2026-10-01",\n', (56, 189, 248, 255)),
        ('  "payment_terms": "Net 30 Days",\n', (56, 189, 248, 255)),
        ('  "total_liability_cap": 250000.00,\n', (251, 191, 36, 255)),
        ('  "governing_law": "Delaware, US",\n', (244, 114, 182, 255)),
        ('  "confidence_score": 0.9982,\n', (52, 211, 153, 255)),
        ('  "hallucination_check": true,\n', (165, 180, 252, 255)),
        ('  "audit_trail": {\n', (255, 255, 255, 255)),
        ('    "ocr_latency_ms": 312,\n', (148, 163, 184, 255)),
        ('    "llm_parser_ms": 1108\n', (148, 163, 184, 255)),
        ('  }\n', (255, 255, 255, 255)),
        ("}", (255, 255, 255, 255))
    ]
    jy = b_y + 54
    for txt, col in json_lines:
        draw.text((rx + 24, jy), txt.strip(), font=f_mono(12), fill=col)
        jy += 24
        
    save_image(base, "public/assets/smart-ai-dashboard-images/dashboard.png")

def build_smart_doc_upload():
    base = make_backdrop(1920, 1080, glow_color=(6, 182, 212), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Smart Doc AI — Document Ingestion & Vision Parsing", url="https://smart-doc.aetherionlabs.com/ingestion", dark=True)
    
    # Split view: Left PDF Document Preview with entity bounding boxes (880px) + Right Realtime Extraction Pipeline (820px)
    lx = wx + 30
    rx = wx + 920
    by = top_y + 24
    bh = wy + wh - by - 24
    
    # Left: PDF Document with bounding boxes
    draw.rounded_rectangle([lx, by, lx + 860, by + bh], radius=14, fill=(18, 24, 38, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((lx + 28, by + 20), "Active Ingestion: Enterprise_Services_Agreement.pdf", font=f_bold(16), fill=(255, 255, 255, 255))
    draw_pill(draw, lx + 860 - 220, by + 18, "Multimodal OCR Active", f_bold(11), bg=(6, 182, 212, 30), fg=(34, 211, 238, 255), border=(6, 182, 212, 255))
    
    # Render PDF Sheet
    px = lx + 40
    py = by + 65
    pw = 780
    ph = bh - 90
    draw.rounded_rectangle([px, py, px + pw, py + ph], radius=8, fill=(255, 255, 255, 255), outline=(210, 220, 235, 255), width=1)
    
    # Document content inside sheet
    draw.text((px + 40, py + 36), "MASTER SERVICES AGREEMENT", font=f_bold(20), fill=(15, 23, 42, 255))
    draw.text((px + 40, py + 66), "Contract Ref: MSA-2026-US-8910 • Governing Jurisdiction: California, USA", font=f_reg(11), fill=(100, 116, 139, 255))
    draw.line([px + 40, py + 92, px + pw - 40, py + 92], fill=(226, 232, 240, 255), width=1)
    
    # Bounding Box 1 (Vendor)
    draw.rounded_rectangle([px + 36, py + 110, px + 380, py + 160], radius=4, fill=(6, 182, 212, 25), outline=(6, 182, 212, 255), width=2)
    draw.text((px + 42, py + 114), "ENTITY: VENDOR_NAME (Conf: 99.8%)", font=f_bold(9), fill=(6, 182, 212, 255))
    draw.text((px + 42, py + 132), "Apex Cloud Infrastructure Technologies LLC", font=f_bold(13), fill=(15, 23, 42, 255))
    
    # Bounding Box 2 (Client)
    draw.rounded_rectangle([px + 400, py + 110, px + pw - 40, py + 160], radius=4, fill=(99, 102, 241, 25), outline=(99, 102, 241, 255), width=2)
    draw.text((px + 406, py + 114), "ENTITY: CLIENT_LEGAL_ENTITY (Conf: 99.6%)", font=f_bold(9), fill=(99, 102, 241, 255))
    draw.text((px + 406, py + 132), "Horizon Media Global Holdings Inc.", font=f_bold(13), fill=(15, 23, 42, 255))
    
    # Contract Body Text
    body_txt = (
        "1. SCOPE OF SERVICES. Provider shall deliver custom digital engineering, architecture design,\n"
        "and artificial intelligence model fine-tuning services as set forth in Exhibit A.\n\n"
        "2. COMPENSATION & FEES. Client shall remit total project compensation of $78,500.00 USD\n"
        "payable in structured milestone disbursements upon verification of acceptance criteria.\n\n"
        "3. TERM & TERMINATION. This Agreement commences on November 1, 2026 and shall continue\n"
        "until completed. Either party may terminate with 30 calendar days written notice."
    )
    draw.text((px + 40, py + 180), body_txt, font=f_reg(11), fill=(51, 65, 85, 255))
    
    # Bounding Box 3 (Compensation)
    draw.rounded_rectangle([px + 36, py + 236, px + 520, py + 280], radius=4, fill=(16, 185, 129, 25), outline=(16, 185, 129, 255), width=2)
    draw.text((px + 42, py + 240), "ENTITY: CONTRACT_VALUE = $78,500.00 USD (Conf: 100%)", font=f_bold(9), fill=(16, 185, 129, 255))
    
    # Right Panel: Real-time LangChain extraction state
    draw.rounded_rectangle([rx, by, rx + 810, by + bh], radius=14, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((rx + 28, by + 20), "LangChain Multimodal Extraction Pipeline", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((rx + 28, by + 48), "Edge S3 Ingestion • Redis Queue • Structured Output Validation", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Pipeline steps
    steps = [
        ("Step 1: Multimodal OCR & Page Ingestion", "SUCCESS", "Extracted 3 pages via PyPDF & Vision parser (0.42s)", (16, 185, 129, 255)),
        ("Step 2: Primary LLM Vision Orchestration", "SUCCESS", "GPT-4-Vision parsed 14 structural entities (0.88s)", (16, 185, 129, 255)),
        ("Step 3: Zod Schema Boundary Validation", "VALIDATED", "All 14 fields passed strict TypeScript Zod schema", (56, 189, 248, 255)),
        ("Step 4: Hallucination & Numeric Cross-Check", "PASSED", "Milestone sum matches total contract value exactly", (165, 180, 252, 255)),
        ("Step 5: Database Commit & Webhook Dispatch", "COMMITTED", "Stored in PostgreSQL with encrypted document hash", (52, 211, 153, 255))
    ]
    sy = by + 88
    for s_title, badge, desc, b_col in steps:
        draw.rounded_rectangle([rx + 24, sy, rx + 786, sy + 74], radius=8, fill=(18, 25, 40, 255), outline=(38, 50, 75, 255), width=1)
        draw.text((rx + 40, sy + 14), s_title, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((rx + 40, sy + 38), desc, font=f_reg(11), fill=(148, 163, 184, 255))
        draw_pill(draw, rx + 786 - 150, sy + 18, badge, f_bold(10), bg=(*b_col[:3], 30), fg=b_col, border=b_col)
        sy += 86
        
    save_image(base, "public/assets/smart-ai-dashboard-images/document-uploading-page.png")

def build_smart_doc_history():
    base = make_backdrop(1920, 1080, glow_color=(16, 185, 129), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Smart Doc AI — Document Audit Log & Export", url="https://smart-doc.aetherionlabs.com/history", dark=True)
    
    draw.text((wx + 40, top_y + 30), "Document Processing Audit Trail", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 64), "Immutable processing logs, validation timestamps, and bulk JSON/CSV exports", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # Table container
    ty = top_y + 110
    th = wy + wh - ty - 30
    draw.rounded_rectangle([wx + 40, ty, wx + ww - 40, ty + th], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    
    # Columns
    cols = [
        ("DOCUMENT ID", wx + 64),
        ("FILENAME & METADATA", wx + 240),
        ("TIMESTAMP", wx + 620),
        ("ENTITIES", wx + 780),
        ("CONFIDENCE", wx + 920),
        ("STATUS", wx + 1100),
        ("EXPORT", wx + 1300)
    ]
    for n, p in cols:
        draw.text((p, ty + 16), n, font=f_bold(11), fill=(100, 116, 139, 255))
    draw.line([wx + 40, ty + 40, wx + ww - 40, ty + 40], fill=(30, 40, 60, 255), width=1)
    
    items = [
        ("DOC-8942", "Vendor_Master_Services_Agmt.pdf", "Oct 14, 2026 14:22", "18 Fields", "99.8%", "VALIDATED", (16, 185, 129, 255)),
        ("DOC-8941", "Q3_Financial_Audit_Report.pdf", "Oct 14, 2026 12:05", "42 Fields", "99.4%", "VALIDATED", (16, 185, 129, 255)),
        ("DOC-8940", "AWS_Infrastructure_Billing.pdf", "Oct 13, 2026 18:30", "12 Fields", "98.9%", "VALIDATED", (16, 185, 129, 255)),
        ("DOC-8939", "Commercial_Lease_Exhibit_B.pdf", "Oct 13, 2026 11:15", "26 Fields", "99.1%", "VALIDATED", (16, 185, 129, 255)),
        ("DOC-8938", "Logistics_Manifest_Batch_12.pdf", "Oct 12, 2026 16:44", "15 Fields", "97.6%", "MANUAL REVIEW", (251, 191, 36, 255)),
        ("DOC-8937", "Employee_Healthcare_Policy.pdf", "Oct 12, 2026 09:12", "31 Fields", "99.7%", "VALIDATED", (16, 185, 129, 255)),
        ("DOC-8936", "Enterprise_Licensing_Quote.pdf", "Oct 11, 2026 15:50", "8 Fields", "99.9%", "VALIDATED", (16, 185, 129, 255))
    ]
    ry = ty + 54
    for did, fn, ts, ent, conf, st, col in items:
        draw.text((wx + 64, ry + 10), did, font=f_mono(12, bold=True), fill=(226, 232, 240, 255))
        draw.text((wx + 240, ry + 6), fn, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((wx + 240, ry + 24), "SHA-256: 8f4b...1a09 • 1.4 MB", font=f_reg(11), fill=(100, 116, 139, 255))
        draw.text((wx + 620, ry + 10), ts, font=f_reg(12), fill=(148, 163, 184, 255))
        draw.text((wx + 780, ry + 10), ent, font=f_reg(12), fill=(203, 213, 225, 255))
        draw.text((wx + 920, ry + 10), conf, font=f_mono(12, bold=True), fill=col)
        draw_pill(draw, wx + 1100, ry + 6, st, f_bold(10), bg=(*col[:3], 30), fg=col, border=col)
        draw.text((wx + 1300, ry + 10), "JSON  •  CSV  •  Webhook", font=f_reg(12), fill=(56, 189, 248, 255))
        draw.line([wx + 40, ry + 44, wx + ww - 40, ry + 44], fill=(24, 32, 48, 255), width=1)
        ry += 48
        
    save_image(base, "public/assets/smart-ai-dashboard-images/document-history.png")

def build_smart_doc_settings():
    base = make_backdrop(1920, 1080, glow_color=(139, 92, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Smart Doc AI — Multi-Model Orchestration & Schema Studio", url="https://smart-doc.aetherionlabs.com/settings", dark=True)
    
    mw, mh = 1120, 820
    mx = wx + (ww - mw) // 2
    my = top_y + (wh - 46 - mh) // 2
    draw.rounded_rectangle([mx, my, mx + mw, my + mh], radius=16, fill=(15, 21, 34, 255), outline=(42, 54, 78, 255), width=1)
    
    draw.text((mx + 40, my + 30), "LLM Orchestration & Zod Schema Studio", font=f_bold(22), fill=(255, 255, 255, 255))
    draw.text((mx + 40, my + 60), "Configure multi-model failover routing, confidence thresholds, and strict JSON schemas", font=f_reg(13), fill=(148, 163, 184, 255))
    draw.line([mx, my + 94, mx + mw, my + 94], fill=(30, 40, 60, 255), width=1)
    
    # Models
    draw.text((mx + 40, my + 115), "LLM ROUTING ENGINE", font=f_bold(11), fill=(99, 102, 241, 255))
    m_boxes = [
        ("GPT-4-Vision (Primary)", "OpenAI GPT-4o Multimodal Vision", "Default for visual layout extraction", True),
        ("Claude 3 Sonnet (Failover)", "Anthropic Fast Document Parser", "Triggers on low confidence or rate limit", True),
        ("Llama 3 8B Vision (Local)", "Self-Hosted Edge Ollama", "Zero egress cost for high-volume batches", False)
    ]
    for i, (m_t, m_sub, m_dsc, act) in enumerate(m_boxes):
        by = my + 140 + i * 72
        draw.rounded_rectangle([mx + 40, by, mx + mw - 40, by + 60], radius=8, fill=(20, 28, 44, 255) if act else (16, 22, 34, 255), outline=(99, 102, 241, 255) if act else (35, 45, 65, 255), width=1)
        draw.text((mx + 60, by + 12), m_t, font=f_bold(14), fill=(255, 255, 255, 255))
        draw.text((mx + 60, by + 34), f"{m_sub} — {m_dsc}", font=f_reg(11), fill=(148, 163, 184, 255))
        draw_pill(draw, mx + mw - 160, by + 16, "ACTIVE ROUTE" if act else "STANDBY", f_bold(10), bg=(16, 185, 129, 30) if act else (30, 40, 58, 255), fg=(52, 211, 153, 255) if act else (148, 163, 184, 255))
        
    save_image(base, "public/assets/smart-ai-dashboard-images/setting.png")


# -------------------------------------------------------------
# 2. NEXUS AI OPS
# -------------------------------------------------------------
def build_nexus_dashboard():
    base = make_backdrop(1920, 1080, glow_color=(6, 182, 212), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Nexus AI Ops — Operational Intelligence Engine", url="https://nexus.aetherionlabs.com/dashboard", dark=True)
    
    sb_w = 260
    draw.rectangle([wx + 1, top_y + 1, wx + sb_w, wy + wh - 1], fill=(11, 16, 26, 255))
    draw.line([wx + sb_w, top_y, wx + sb_w, wy + wh], fill=(32, 42, 62, 255), width=1)
    
    # Logo
    draw.rounded_rectangle([wx + 24, top_y + 24, wx + 56, top_y + 56], radius=8, fill=(6, 182, 212, 255))
    draw.text((wx + 34, top_y + 28), "N", font=f_bold(20), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 24), "Nexus AI Ops", font=f_bold(16), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 44), "Central Nervous System", font=f_reg(11), fill=(148, 163, 184, 255))
    
    nav = [("Command Center", True), ("Real-time Analytics", False), ("pgvector SQL Copilot", False), ("Anomaly Reports", False), ("Integration Webhooks", False)]
    ny = top_y + 88
    for itm, act in nav:
        if act:
            draw.rounded_rectangle([wx + 16, ny, wx + sb_w - 16, ny + 38], radius=8, fill=(24, 38, 56, 255), outline=(34, 211, 238, 255), width=1)
            draw.text((wx + 36, ny + 9), itm, font=f_bold(13), fill=(34, 211, 238, 255))
        else:
            draw.text((wx + 36, ny + 9), itm, font=f_reg(13), fill=(148, 163, 184, 255))
        ny += 46
        
    cx = wx + sb_w + 36
    cy = top_y + 28
    cw = ww - sb_w - 72
    
    draw.text((cx, cy), "Unified Command Center", font=f_bold(24), fill=(255, 255, 255, 255))
    draw.text((cx, cy + 32), "Real-time Telemetry Ingestion • Anomaly Isolation Forests • pgvector Dual-Agent Copilot", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # 4 Stat Cards
    card_y = cy + 76
    card_w = (cw - 48) // 4
    card_h = 105
    stats = [
        ("ANNUAL RUN RATE (ARR)", "$1.12M", "+18.4% YoY Growth", (16, 185, 129, 255)),
        ("ACTIVE NODES & CLUSTERS", "4,360", "Global 99.99% Uptime", (6, 182, 212, 255)),
        ("ANOMALY DETECTION", "0.02%", "1 auto-remediated today", (244, 114, 182, 255)),
        ("RAG QUERY LATENCY", "148 ms", "pgvector sub-second search", (139, 92, 246, 255))
    ]
    for i, (lbl, val, sub, col) in enumerate(stats):
        kx = cx + i * (card_w + 16)
        draw.rounded_rectangle([kx, card_y, kx + card_w, card_y + card_h], radius=12, fill=(15, 21, 33, 255), outline=(36, 48, 70, 255), width=1)
        draw.text((kx + 18, card_y + 14), lbl, font=f_bold(11), fill=(100, 116, 139, 255))
        draw.text((kx + 18, card_y + 36), val, font=f_bold(22), fill=(255, 255, 255, 255))
        draw.text((kx + 18, card_y + 74), sub, font=f_reg(11), fill=col)
        
    # Split Telemetry Chart + Live Event Stream
    b_y = card_y + card_h + 24
    b_h = wy + wh - b_y - 24
    lw = cw - 480
    rw = 460
    
    # Left Telemetry Chart
    draw.rounded_rectangle([cx, b_y, cx + lw, b_y + b_h], radius=12, fill=(13, 18, 30, 255), outline=(36, 48, 70, 255), width=1)
    draw.text((cx + 24, b_y + 18), "Cluster Ingestion Latency & Node Health (Tremor.so Engine)", font=f_bold(15), fill=(255, 255, 255, 255))
    draw_pill(draw, cx + lw - 180, b_y + 16, "Live Stream 60 FPS", f_bold(10), bg=(6, 182, 212, 30), fg=(34, 211, 238, 255))
    
    # Render simulated area chart
    chart_x = cx + 40
    chart_y = b_y + 70
    chart_w = lw - 80
    chart_h = b_h - 110
    draw.line([chart_x, chart_y + chart_h, chart_x + chart_w, chart_y + chart_h], fill=(40, 52, 75, 255), width=1)
    
    # Simulated wave line
    points = []
    import math
    for step_i in range(30):
        px = chart_x + int(step_i * (chart_w / 29))
        val_norm = math.sin(step_i * 0.4) * 0.25 + math.cos(step_i * 0.8) * 0.15 + 0.5
        py = chart_y + int((1.0 - val_norm) * chart_h * 0.7) + 30
        points.append((px, py))
    for i in range(len(points) - 1):
        draw.line([points[i], points[i+1]], fill=(6, 182, 212, 255), width=3)
        draw.line([(points[i][0], points[i][1] + 15), (points[i+1][0], points[i+1][1] + 15)], fill=(139, 92, 246, 200), width=2)
        
    # Right Live Event Stream
    rx = cx + lw + 20
    draw.rounded_rectangle([rx, b_y, rx + rw, b_y + b_h], radius=12, fill=(13, 18, 30, 255), outline=(36, 48, 70, 255), width=1)
    draw.text((rx + 20, b_y + 18), "Live Telemetry Event Log", font=f_bold(14), fill=(34, 211, 238, 255))
    
    events = [
        ("14:28:02", "Stripe Webhook Ingested", "Revenue sync +$1,250", (16, 185, 129, 255)),
        ("14:27:45", "AWS CloudWatch Trigger", "US-East-1 autoscale OK", (6, 182, 212, 255)),
        ("14:26:12", "Isolation Forest Alert", "Resolved API spike (p99 110ms)", (244, 114, 182, 255)),
        ("14:24:50", "Dual-Agent SQL Executed", "User query answered (42ms)", (165, 180, 252, 255)),
        ("14:22:10", "Datadog Health Check", "All 28 microservices green", (16, 185, 129, 255))
    ]
    ey = b_y + 60
    for ts, ev, dt, col in events:
        draw.rounded_rectangle([rx + 16, ey, rx + rw - 16, ey + 60], radius=8, fill=(18, 24, 38, 255), outline=(32, 44, 66, 255), width=1)
        draw.text((rx + 28, ey + 10), f"[{ts}] {ev}", font=f_bold(12), fill=col)
        draw.text((rx + 28, ey + 32), dt, font=f_reg(11), fill=(148, 163, 184, 255))
        ey += 70
        
    save_image(base, "public/assets/nexus-ai-dashboard-image/homepage-dashboard.png")

def build_nexus_analytics():
    base = make_backdrop(1920, 1080, glow_color=(16, 185, 129), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Nexus AI Ops — Operational Telemetry & Analytics", url="https://nexus.aetherionlabs.com/analytics", dark=True)
    
    draw.text((wx + 40, top_y + 30), "Operational Performance & Latency Analytics", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 64), "Multi-cluster CPU/memory saturation, microservice response distributions, and automated anomaly isolation", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # 3 Large analytic panels
    p_y = top_y + 115
    p_w = (ww - 120) // 3
    p_h = wy + wh - p_y - 30
    
    panels = [
        ("Microservice Latency (p50 / p95 / p99)", "Target: <150ms", (6, 182, 212, 255)),
        ("Multi-Cloud Throughput (req/sec)", "Global Traffic: 12.4k req/s", (16, 185, 129, 255)),
        ("Isolation Forest Anomaly Score", "Stability Index: 99.98%", (139, 92, 246, 255))
    ]
    for i, (title, sub, col) in enumerate(panels):
        px = wx + 40 + i * (p_w + 20)
        draw.rounded_rectangle([px, p_y, px + p_w, p_y + p_h], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
        draw.text((px + 24, p_y + 20), title, font=f_bold(14), fill=(255, 255, 255, 255))
        draw.text((px + 24, p_y + 44), sub, font=f_reg(11), fill=col)
        draw.line([px + 24, p_y + 70, px + p_w - 24, p_y + 70], fill=(30, 40, 60, 255), width=1)
        
        # Bars / Charts inside each panel
        for b_i in range(8):
            by = p_y + 90 + b_i * 65
            draw.text((px + 24, by), f"Cluster-0{b_i+1} [US-East]", font=f_reg(11), fill=(148, 163, 184, 255))
            draw.rounded_rectangle([px + 24, by + 20, px + p_w - 24, by + 34], radius=4, fill=(24, 32, 50, 255))
            bar_fill = int((p_w - 48) * (0.4 + (b_i * 0.07) % 0.5))
            draw.rounded_rectangle([px + 24, by + 20, px + 24 + bar_fill, by + 34], radius=4, fill=col)
            
    save_image(base, "public/assets/nexus-ai-dashboard-image/analytics.png")

def build_nexus_chats():
    base = make_backdrop(1920, 1080, glow_color=(139, 92, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Nexus AI Ops — pgvector SQL Copilot", url="https://nexus.aetherionlabs.com/copilot", dark=True)
    
    # Conversation view
    cw, ch = 1200, 820
    cx = wx + (ww - cw) // 2
    cy = top_y + (wh - 46 - ch) // 2
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=16, fill=(13, 18, 30, 255), outline=(38, 48, 70, 255), width=1)
    
    draw.text((cx + 36, cy + 24), "pgvector Dual-Agent Natural Language to SQL", font=f_bold(20), fill=(255, 255, 255, 255))
    draw.text((cx + 36, cy + 52), "Schema Agent finds tables via vector similarity • Query Agent synthesizes deterministic SQL", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.line([cx, cy + 84, cx + cw, cy + 84], fill=(30, 40, 60, 255), width=1)
    
    # User message
    uy = cy + 110
    draw.rounded_rectangle([cx + 36, uy, cx + cw - 36, uy + 60], radius=8, fill=(24, 34, 52, 255), outline=(45, 60, 90, 255), width=1)
    draw.text((cx + 56, uy + 12), "USER (Product Manager):", font=f_bold(11), fill=(56, 189, 248, 255))
    draw.text((cx + 56, uy + 32), '"Which enterprise tier accounts had a >15% drop in weekly active API calls over the last 14 days?"', font=f_reg(13), fill=(255, 255, 255, 255))
    
    # Agent thinking & SQL output
    ay = uy + 80
    draw.rounded_rectangle([cx + 36, ay, cx + cw - 36, ay + 380], radius=10, fill=(16, 22, 36, 255), outline=(139, 92, 246, 255), width=1)
    draw.text((cx + 56, ay + 16), "COPILOT: Schema Agent matched 'tenants', 'api_telemetry_daily' (Cosine Similarity: 0.942)", font=f_bold(11), fill=(165, 180, 252, 255))
    
    # Code block inside agent box
    code_y = ay + 44
    draw.rounded_rectangle([cx + 56, code_y, cx + cw - 56, code_y + 190], radius=6, fill=(10, 14, 24, 255), outline=(32, 44, 68, 255), width=1)
    sql_text = [
        "WITH weekly_usage AS (",
        "  SELECT tenant_id, name, SUM(request_count) AS total_requests,",
        "         LAG(SUM(request_count)) OVER (PARTITION BY tenant_id ORDER BY week_bucket) AS prev_week",
        "  FROM api_telemetry_daily JOIN tenants USING (tenant_id)",
        "  WHERE tier = 'ENTERPRISE' AND recorded_at >= NOW() - INTERVAL '14 days'",
        "  GROUP BY tenant_id, name, week_bucket",
        ")",
        "SELECT name, total_requests, prev_week, ROUND(((total_requests - prev_week)::numeric / prev_week)*100, 2) AS pct_change",
        "FROM weekly_usage WHERE ((total_requests - prev_week)::numeric / prev_week) < -0.15;"
    ]
    for i, line in enumerate(sql_text):
        draw.text((cx + 72, code_y + 10 + i * 19), line, font=f_mono(11), fill=(52, 211, 153, 255) if "SELECT" in line or "WHERE" in line else (203, 213, 225, 255))
        
    # Result table
    res_y = code_y + 206
    draw.text((cx + 56, res_y), "Execution Results (2 Records Found in 38ms):", font=f_bold(12), fill=(255, 255, 255, 255))
    draw.text((cx + 56, res_y + 24), "• Apex Horizon Tech (Tenant #1042): -22.4% API traffic reduction (Investigate SLA ticket #889)\n• CloudScale AI Corp (Tenant #8819): -16.8% API traffic reduction (Scheduled maintenance window)", font=f_reg(11), fill=(148, 163, 184, 255))
    
    save_image(base, "public/assets/nexus-ai-dashboard-image/chats.png")

def build_nexus_report():
    base = make_backdrop(1920, 1080, glow_color=(244, 114, 182), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Nexus AI Ops — Executive Operational Report", url="https://nexus.aetherionlabs.com/reports", dark=True)
    
    draw.text((wx + 40, top_y + 30), "Automated Executive Health & Infrastructure Audit", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 64), "Compiled automatically by Nexus Autonomous Reasoning Engine", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # 2 Big Cards
    c1_w = (ww - 100) // 2
    c1_h = wy + wh - top_y - 130
    
    # Left: Executive Summary
    draw.rounded_rectangle([wx + 40, top_y + 110, wx + 40 + c1_w, top_y + 110 + c1_h], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((wx + 68, top_y + 134), "Key Executive Operational Highlights", font=f_bold(18), fill=(255, 255, 255, 255))
    
    items = [
        ("Cloud Infrastructure Cost Optimization", "-$4,250 / month savings achieved by down-scaling idle staging clusters.", (16, 185, 129, 255)),
        ("Global Service Level Agreement (SLA)", "99.98% uptime achieved across 4 continents (Exceeded 99.95% target).", (6, 182, 212, 255)),
        ("API Response Degradation Mitigated", "3 anomalous gateway memory leaks quarantined automatically before impact.", (244, 114, 182, 255)),
        ("Autonomous Self-Healing Actions", "14 Pod restart events resolved with zero human engineer intervention.", (139, 92, 246, 255))
    ]
    iy = top_y + 180
    for tit, dsc, col in items:
        draw.rounded_rectangle([wx + 68, iy, wx + 40 + c1_w - 28, iy + 80], radius=8, fill=(18, 24, 38, 255), outline=(32, 44, 66, 255), width=1)
        draw.text((wx + 88, iy + 14), tit, font=f_bold(13), fill=col)
        draw.text((wx + 88, iy + 38), dsc, font=f_reg(11), fill=(148, 163, 184, 255))
        iy += 94
        
    # Right: Risk Analysis
    rx = wx + 60 + c1_w
    draw.rounded_rectangle([rx, top_y + 110, rx + c1_w, top_y + 110 + c1_h], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((rx + 28, top_y + 134), "Proactive Risk Matrix & Anomaly Scoring", font=f_bold(18), fill=(255, 255, 255, 255))
    
    save_image(base, "public/assets/nexus-ai-dashboard-image/report.png")

def build_nexus_settings():
    base = make_backdrop(1920, 1080, glow_color=(34, 211, 238), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Nexus AI Ops — Integration Connectors & Webhooks", url="https://nexus.aetherionlabs.com/integrations", dark=True)
    
    draw.text((wx + 40, top_y + 30), "Data Ingestion Connectors & Webhook Listeners", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 64), "Real-time sync to central Supabase PostgreSQL instance via edge Lambda listeners", font=f_reg(13), fill=(148, 163, 184, 255))
    
    save_image(base, "public/assets/nexus-ai-dashboard-image/settings.png")


# -------------------------------------------------------------
# 3. AI PROPOSAL WRITER
# -------------------------------------------------------------
def build_proposal_homepage():
    base = make_backdrop(1920, 1080, glow_color=(139, 92, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="AI Proposal Writer — Agency Pipeline", url="https://proposals.aetherionlabs.com/pipeline", dark=True)
    
    draw.text((wx + 40, top_y + 30), "Agency Proposal Pipeline", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 64), "Google Gemini Pro prompt engine • Client-side React-PDF compilation • 0% Server Storage", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # Stat Cards
    card_y = top_y + 110
    cw = (ww - 80)
    card_w = (cw - 48) // 4
    stats = [
        ("TOTAL PIPELINE VALUE", "$184,500.00", "18 proposals created", (139, 92, 246, 255)),
        ("ACCEPTED CONTRACTS", "$124,000.00", "78% acceptance rate", (16, 185, 129, 255)),
        ("AVERAGE GENERATION", "3.8 min", "Reduced from 2.5 hours", (6, 182, 212, 255)),
        ("PRIVACY COMPLIANCE", "100% Client-Side", "Zero server logging", (244, 114, 182, 255))
    ]
    for i, (lbl, val, sub, col) in enumerate(stats):
        kx = wx + 40 + i * (card_w + 16)
        draw.rounded_rectangle([kx, card_y, kx + card_w, card_y + 105], radius=12, fill=(16, 22, 36, 255), outline=(40, 52, 75, 255), width=1)
        draw.text((kx + 18, card_y + 14), lbl, font=f_bold(11), fill=(100, 116, 139, 255))
        draw.text((kx + 18, card_y + 36), val, font=f_bold(22), fill=(255, 255, 255, 255))
        draw.text((kx + 18, card_y + 74), sub, font=f_reg(11), fill=col)
        
    # Proposals Table
    tbl_y = card_y + 130
    tbl_h = wy + wh - tbl_y - 30
    draw.rounded_rectangle([wx + 40, tbl_y, wx + ww - 40, tbl_y + tbl_h], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    
    cols = [
        ("PROPOSAL TITLE", wx + 64),
        ("PROSPECT / CLIENT", wx + 440),
        ("TIMELINE", wx + 780),
        ("BUDGET (USD)", wx + 960),
        ("STATUS", wx + 1160),
        ("ACTIONS", wx + 1360)
    ]
    for n, p in cols:
        draw.text((p, tbl_y + 16), n, font=f_bold(11), fill=(100, 116, 139, 255))
    draw.line([wx + 40, tbl_y + 40, wx + ww - 40, tbl_y + 40], fill=(30, 40, 60, 255), width=1)
    
    props = [
        ("Custom SaaS MVP Development", "Apex Horizon Tech (Austin, TX)", "6 Weeks", "$28,000.00", "ACCEPTED", (16, 185, 129, 255)),
        ("Enterprise AI Chatbot & RAG Engine", "CloudScale AI (Seattle, WA)", "4 Weeks", "$18,500.00", "ACCEPTED", (16, 185, 129, 255)),
        ("Fintech API & Stripe Architecture", "Velocity Pay (Toronto, ON)", "8 Weeks", "$42,000.00", "IN REVIEW", (59, 130, 246, 255)),
        ("B2B Operations Portal & Auth", "MedQuick Health (Boston, MA)", "5 Weeks", "$24,500.00", "ACCEPTED", (16, 185, 129, 255)),
        ("Realtime Telemetry Dashboard", "Logistics Net (Chicago, IL)", "3 Weeks", "$15,000.00", "DRAFT", (148, 163, 184, 255))
    ]
    ry = tbl_y + 54
    for tit, cln, tm, bgt, st, col in props:
        draw.text((wx + 64, ry + 10), tit, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((wx + 440, ry + 10), cln, font=f_reg(12), fill=(203, 213, 225, 255))
        draw.text((wx + 780, ry + 10), tm, font=f_reg(12), fill=(148, 163, 184, 255))
        draw.text((wx + 960, ry + 10), bgt, font=f_bold(13), fill=(255, 255, 255, 255))
        draw_pill(draw, wx + 1160, ry + 6, st, f_bold(10), bg=(*col[:3], 30), fg=col, border=col)
        draw.text((wx + 1360, ry + 10), "Edit  •  PDF  •  Send", font=f_reg(12), fill=(139, 92, 246, 255))
        draw.line([wx + 40, ry + 44, wx + ww - 40, ry + 44], fill=(24, 32, 48, 255), width=1)
        ry += 52
        
    save_image(base, "public/assets/ai-proposal-writer-images/homepage.png")

def build_proposal_forms():
    base = make_backdrop(1920, 1080, glow_color=(236, 72, 153), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="AI Proposal Writer — Wizard & Live PDF Preview", url="https://proposals.aetherionlabs.com/wizard", dark=True)
    
    # Split view: Wizard Form (840px) + Generated PDF Document (840px)
    lx = wx + 30
    rx = wx + ww - 870
    by = top_y + 24
    bh = wy + wh - by - 24
    
    # Wizard Card
    draw.rounded_rectangle([lx, by, lx + 840, by + bh], radius=14, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    draw.text((lx + 28, by + 20), "Proposal Generation Wizard", font=f_bold(18), fill=(255, 255, 255, 255))
    draw_pill(draw, lx + 840 - 240, by + 18, "Google Gemini Pro AI", f_bold(11), bg=(139, 92, 246, 30), fg=(165, 180, 252, 255), border=(139, 92, 246, 255))
    
    # Steps breadcrumb
    steps_y = by + 60
    draw.text((lx + 28, steps_y), "Step 3 of 4: Technical Deliverables & Architecture", font=f_reg(12), fill=(236, 72, 153, 255))
    
    # Input field cards
    iy = steps_y + 30
    fields = [
        ("PROJECT TITLE", "Custom Enterprise SaaS Application with RAG Integration"),
        ("PROSPECT / CLIENT", "Apex Horizon Technologies Inc. • Austin, TX"),
        ("TECHNICAL STACK", "Next.js 14 App Router, TypeScript, Supabase, pgvector, LangChain"),
        ("ESTIMATED SCOPE", "4 Core Milestones: Auth, API Layer, Dual-Agent Copilot, Dashboard")
    ]
    for lbl, val in fields:
        draw.rounded_rectangle([lx + 28, iy, lx + 812, iy + 62], radius=8, fill=(18, 25, 40, 255), outline=(35, 48, 70, 255), width=1)
        draw.text((lx + 40, iy + 10), lbl, font=f_bold(10), fill=(100, 116, 139, 255))
        draw.text((lx + 40, iy + 30), val, font=f_reg(12), fill=(255, 255, 255, 255))
        iy += 74
        
    # AI Tone selector
    draw.text((lx + 28, iy + 10), "AI TONE & WRITING STYLE:", font=f_bold(11), fill=(148, 163, 184, 255))
    draw_pill(draw, lx + 28, iy + 32, "Executive Persuasive (Active)", f_bold(11), bg=(236, 72, 153, 30), fg=(244, 114, 182, 255))
    draw_pill(draw, lx + 260, iy + 32, "Technical Specification", f_reg(11), bg=(24, 32, 50, 255), fg=(148, 163, 184, 255))
    draw_pill(draw, lx + 460, iy + 32, "Startup Agility", f_reg(11), bg=(24, 32, 50, 255), fg=(148, 163, 184, 255))
    
    # Right PDF Document Sheet
    draw.rounded_rectangle([rx, by, rx + 840, by + bh], radius=14, fill=(18, 24, 38, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((rx + 28, by + 20), "Live React-PDF Document Preview", font=f_bold(16), fill=(255, 255, 255, 255))
    draw_pill(draw, rx + 840 - 190, by + 18, "Export PDF", f_bold(12), bg=(139, 92, 246, 255), fg=(255, 255, 255, 255))
    
    # Sheet
    sx = rx + 40
    sy = by + 65
    sw = 760
    sh = bh - 90
    draw.rounded_rectangle([sx, sy, sx + sw, sy + sh], radius=6, fill=(255, 255, 255, 255), outline=(210, 220, 235, 255), width=1)
    draw.text((sx + 40, sy + 36), "TECHNICAL PROJECT PROPOSAL", font=f_bold(20), fill=(15, 23, 42, 255))
    draw.text((sx + 40, sy + 64), "Prepared by Aetherion Labs for Apex Horizon Technologies Inc.", font=f_reg(11), fill=(100, 116, 139, 255))
    draw.line([sx + 40, sy + 92, sx + sw - 40, sy + 92], fill=(226, 232, 240, 255), width=1)
    
    prop_body = (
        "1. EXECUTIVE OVERVIEW\n"
        "Aetherion Labs is pleased to present this implementation blueprint for Apex Horizon's\n"
        "cloud operational platform. Our approach prioritizes sub-second latency, zero-maintenance\n"
        "serverless architecture, and deterministic pgvector query retrieval.\n\n"
        "2. DELIVERABLES & MILESTONES\n"
        "• Phase 1: Architecture Specification & Schema Design ($7,000.00)\n"
        "• Phase 2: Supabase Ingestion Pipelines & Edge Workers ($9,000.00)\n"
        "• Phase 3: Dual-Agent SQL Generation & RAG Engine ($8,000.00)\n"
        "• Phase 4: Production Staging, Stress Testing & Handover ($4,000.00)\n\n"
        "TOTAL CONTRACT INVESTMENT: $28,000.00 USD • Estimated Delivery: 6 Weeks"
    )
    draw.text((sx + 40, sy + 110), prop_body, font=f_reg(11), fill=(51, 65, 85, 255))
    
    save_image(base, "public/assets/ai-proposal-writer-images/proposal-forms.png")


# -------------------------------------------------------------
# 4. IMAGE TOOLKIT PRO (6 images)
# -------------------------------------------------------------
def build_image_toolkit_assets():
    files = [
        ("01_workspace.png", "Image Processing & Histogram Workbench", "Workspace & RGB Color Space Inspection"),
        ("02_drawing_tools.png", "Annotation & Geometric Masking Toolkit", "Pixel-Accurate Annotation and ROI Layering"),
        ("03_detection_analytics.png", "Haar Cascade & Face Landmark Analytics", "Real-Time Object Detection & Landmark Extraction"),
        ("04_webcam_recording.png", "Live Video Stream & Canny Edge Detection", "60 FPS Multithreaded Live Stream Inspection"),
        ("05_batch_processing.png", "Multithreaded Daemon Batch Queue", "Asynchronous Python Threading with Zero GUI Freeze"),
        ("06_preferences_about.png", "OpenCV Build & Hardware Acceleration", "Thread Pool Management & Execution Performance")
    ]
    for fn, title, sub in files:
        base = make_backdrop(1920, 1080, glow_color=(13, 148, 136), center=(960, 520), glow_r=750)
        draw = ImageDraw.Draw(base)
        wx, wy, ww, wh = 80, 50, 1760, 980
        top_y = draw_window_frame(draw, wx, wy, ww, wh, title=f"Image Toolkit Pro v1.4.0 — {title}", url="desktop://imagetoolkitpro/workspace", dark=True)
        
        # Desktop GUI Shell
        draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(15, 23, 36, 255))
        
        # Top toolbar
        tb_y = top_y + 12
        draw.text((wx + 30, tb_y), f"Image Toolkit Pro — {title}", font=f_bold(18), fill=(255, 255, 255, 255))
        draw.text((wx + 30, tb_y + 26), f"Python 3.10 • OpenCV 4.8 • NumPy • {sub}", font=f_reg(12), fill=(148, 163, 184, 255))
        
        # Tools panel left (240px)
        draw.rounded_rectangle([wx + 30, top_y + 65, wx + 270, wy + wh - 30], radius=10, fill=(18, 28, 45, 255), outline=(38, 52, 78, 255), width=1)
        draw.text((wx + 46, top_y + 80), "CV2 OPERATIONS", font=f_bold(11), fill=(45, 212, 191, 255))
        
        ops = ["Select & ROI", "Haar Detection", "Canny Edge Filter", "Gaussian Blur", "Morphological", "Batch Queue", "Histograms", "Color Conversion"]
        oy = top_y + 110
        for op in ops:
            draw.rounded_rectangle([wx + 46, oy, wx + 254, oy + 36], radius=6, fill=(24, 38, 60, 255), outline=(45, 60, 90, 255), width=1)
            draw.text((wx + 58, oy + 9), op, font=f_reg(12), fill=(241, 245, 249, 255))
            oy += 44
            
        # Main Canvas Center (1000px)
        mc_x = wx + 290
        mc_w = ww - 590
        draw.rounded_rectangle([mc_x, top_y + 65, mc_x + mc_w, wy + wh - 30], radius=10, fill=(10, 15, 25, 255), outline=(38, 52, 78, 255), width=1)
        
        # Simulated CV Inspection Canvas
        draw.rectangle([mc_x + 30, top_y + 100, mc_x + mc_w - 30, wy + wh - 60], fill=(20, 30, 48, 255))
        draw.text((mc_x + 50, top_y + 120), f"[INPUT MATRIX: 3840x2160 RGB] • ALGORITHM: {title.upper()}", font=f_mono(12, bold=True), fill=(45, 212, 191, 255))
        
        # Simulated detection box
        bx1, by1, bx2, by2 = mc_x + 180, top_y + 200, mc_x + 650, top_y + 600
        draw.rectangle([bx1, by1, bx2, by2], outline=(45, 212, 191, 255), width=2)
        draw.text((bx1 + 10, by1 + 10), "HAAR_CASCADE_FACE: CONFIDENCE 0.984", font=f_mono(11), fill=(45, 212, 191, 255))
        
        # Right Metadata & Histograms (260px)
        rx = mc_x + mc_w + 20
        draw.rounded_rectangle([rx, top_y + 65, wx + ww - 30, wy + wh - 30], radius=10, fill=(18, 28, 45, 255), outline=(38, 52, 78, 255), width=1)
        draw.text((rx + 20, top_y + 80), "TELEMETRY & HISTOGRAM", font=f_bold(11), fill=(45, 212, 191, 255))
        draw.text((rx + 20, top_y + 110), "FPS: 60.0\nLatency: 14.2 ms\nMatrix: uint8 (HWC)\nMemory: 84 MB\nThreads: 8 Active", font=f_mono(11), fill=(203, 213, 225, 255))
        
        save_image(base, f"public/assets/imagetoolkit_images/{fn}")


# -------------------------------------------------------------
# 5. ADVANCED VIDEO QA SYSTEM (5 images)
# -------------------------------------------------------------
def build_video_qa_assets():
    files = [
        ("advanced-video-qa-pro-shell.png", "PyQt6 Desktop Research Workspace", "Waveform Timeline & Video Knowledge Graph"),
        ("video-play.png", "Precise Timestamp Navigation & Video Player", "FFmpeg Playback Synchronized with Audio Transcription"),
        ("processing.png", "Asynchronous Whisper Audio Pipeline", "High-Throughput Chunking & FAISS Vector Embeddings"),
        ("provider-analysis.png", "FAISS Vector Search & Cosine Similarity", "Top-K Semantic Chunk Retrieval Visualizer"),
        ("chat-proof.png", "Grounded Video Research Chat with Timestamp Citations", "Verifiable AI Evidence & 1-Click Timestamp Jump")
    ]
    for fn, title, sub in files:
        base = make_backdrop(1920, 1080, glow_color=(168, 85, 247), center=(960, 520), glow_r=750)
        draw = ImageDraw.Draw(base)
        wx, wy, ww, wh = 80, 50, 1760, 980
        top_y = draw_window_frame(draw, wx, wy, ww, wh, title=f"Advanced Video QA Pro — {title}", url="desktop://videoqa/workbench", dark=True)
        
        draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
        
        # Header
        draw.text((wx + 30, top_y + 16), f"Advanced Video QA System — {title}", font=f_bold(20), fill=(255, 255, 255, 255))
        draw.text((wx + 30, top_y + 44), f"Python 3.11 • PyQt6 • OpenAI Whisper • FAISS Vector Engine • LangChain RAG • {sub}", font=f_reg(12), fill=(148, 163, 184, 255))
        
        # Left Video / Timeline Player (1040px)
        vx = wx + 30
        vw = 1040
        vy = top_y + 75
        vh = wy + wh - vy - 30
        draw.rounded_rectangle([vx, vy, vx + vw, vy + vh], radius=12, fill=(16, 22, 36, 255), outline=(38, 48, 70, 255), width=1)
        
        # Screen area
        draw.rounded_rectangle([vx + 20, vy + 20, vx + vw - 20, vy + vh - 140], radius=8, fill=(8, 12, 20, 255))
        draw.text((vx + 40, vy + 40), "[ACTIVE VIDEO PLAYBACK] Stanford_CS229_Lecture_04.mp4", font=f_mono(12, bold=True), fill=(168, 85, 247, 255))
        
        # Timecode
        draw.text((vx + 40, vy + vh - 180), "00:42:15 / 01:28:40  •  SEEK TIMESTAMP LOCKED", font=f_mono(14, bold=True), fill=(52, 211, 153, 255))
        
        # Waveform Timeline bar
        w_bar_y = vy + vh - 120
        draw.rounded_rectangle([vx + 20, w_bar_y, vx + vw - 20, w_bar_y + 36], radius=6, fill=(24, 32, 50, 255))
        draw.rectangle([vx + 20, w_bar_y, vx + 520, w_bar_y + 36], fill=(168, 85, 247, 180))
        draw.ellipse([vx + 514, w_bar_y + 6, vx + 538, w_bar_y + 30], fill=(255, 255, 255, 255))
        
        # Right Chat & Grounded Citations (640px)
        cx = vx + vw + 24
        cw = ww - vw - 78
        draw.rounded_rectangle([cx, vy, cx + cw, vy + vh], radius=12, fill=(16, 22, 36, 255), outline=(38, 48, 70, 255), width=1)
        draw.text((cx + 24, vy + 20), "Grounded Video Research Chat", font=f_bold(16), fill=(255, 255, 255, 255))
        draw_pill(draw, cx + cw - 160, vy + 16, "FAISS Match 99.1%", f_bold(10), bg=(168, 85, 247, 30), fg=(192, 132, 252, 255))
        
        # Q&A conversation
        qy = vy + 60
        draw.rounded_rectangle([cx + 20, qy, cx + cw - 20, qy + 70], radius=8, fill=(22, 30, 48, 255), outline=(36, 50, 75, 255), width=1)
        draw.text((cx + 34, qy + 12), "RESEARCHER:", font=f_bold(10), fill=(148, 163, 184, 255))
        draw.text((cx + 34, qy + 32), '"How is the loss function regularized in Section 3?"', font=f_reg(12), fill=(255, 255, 255, 255))
        
        # Answer
        ay = qy + 85
        draw.rounded_rectangle([cx + 20, ay, cx + cw - 20, ay + 260], radius=8, fill=(22, 30, 48, 255), outline=(168, 85, 247, 255), width=1)
        draw.text((cx + 34, ay + 12), "GROUNDED AI RESPONSE:", font=f_bold(10), fill=(192, 132, 252, 255))
        ans_txt = (
            "The speaker explicitly states that L2 weight decay is applied\n"
            "with lambda = 0.01 to prevent overfitting in the deep layer weights.\n\n"
            "VERIFIED CITATIONS (Click to jump video):\n"
            "• Citation [1]: 00:42:15 - 00:42:48 (Confidence: 0.991)\n"
            "• Citation [2]: 00:43:10 - 00:43:55 (Confidence: 0.984)\n"
            "• Transcript Match: '...we regularize the cost function using L2...'"
        )
        draw.text((cx + 34, ay + 36), ans_txt, font=f_reg(11), fill=(226, 232, 240, 255))
        
        save_image(base, f"public/assets/advanced_video_qa_pro_image/{fn}")


# -------------------------------------------------------------
# 6. OPENGRAPH SOCIAL CARD (1200 x 630)
# -------------------------------------------------------------
def build_opengraph_card():
    base = make_backdrop(1200, 630, glow_color=(6, 182, 212), center=(600, 315), glow_r=500, bg_base=(5, 8, 16))
    draw = ImageDraw.Draw(base)
    
    # Outer luxury border
    draw.rounded_rectangle([20, 20, 1180, 610], radius=16, outline=(40, 52, 75, 255), width=1)
    
    # Place Aetherion Labs Brand Mark
    logo_path = "public/assets/aetherion_logo.png"
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert("RGBA")
            logo = logo.resize((96, 96), Image.Resampling.LANCZOS)
            base.paste(logo, (100, 130), logo)
        except Exception as e:
            print("Logo load error:", e)
            
    # Headline & Studio Positioning
    draw.text((220, 130), "AETHERION LABS", font=f_bold(38), fill=(255, 255, 255, 255))
    draw.text((220, 180), "Custom Software & Digital Product Studio", font=f_bold(20), fill=(6, 182, 212, 255))
    
    draw.line([100, 250, 1100, 250], fill=(30, 42, 65, 255), width=1)
    
    # Subtitle value proposition
    sub_desc = (
        "Founder-led engineering studio building high-performance web applications, custom software,\n"
        "practical AI systems, and SaaS MVPs for founders and businesses across the US, Canada, and worldwide."
    )
    draw.text((100, 280), sub_desc, font=f_reg(17), fill=(203, 213, 225, 255))
    
    # Capability badges
    pills = [
        "Web Applications", "AI & Automation", "SaaS MVPs",
        "Prototypes & Demos", "Custom Software"
    ]
    px = 100
    py = 390
    for p in pills:
        pw, _ = draw_pill(draw, px, py, p, f_bold(13), bg=(18, 26, 42, 255), fg=(255, 255, 255, 255), border=(45, 60, 90, 255))
        px += pw + 16
        
    # Footer Trust Line
    draw.text((100, 510), "Direct Engineer Communication  •  Strict IP Ownership  •  hammad.dpdns.org", font=f_reg(14), fill=(148, 163, 184, 255))
    
    save_image(base, "src/app/opengraph-image.png")


if __name__ == "__main__":
    print("Generating Smart Doc AI assets...")
    build_smart_doc_dashboard()
    build_smart_doc_upload()
    build_smart_doc_history()
    build_smart_doc_settings()
    
    print("Generating Nexus AI Ops assets...")
    build_nexus_dashboard()
    build_nexus_analytics()
    build_nexus_chats()
    build_nexus_report()
    build_nexus_settings()
    
    print("Generating AI Proposal Writer assets...")
    build_proposal_homepage()
    build_proposal_forms()
    
    print("Generating Image Toolkit Pro assets...")
    build_image_toolkit_assets()
    
    print("Generating Advanced Video QA assets...")
    build_video_qa_assets()
    
    print("Generating OpenGraph Social Card...")
    build_opengraph_card()
    
    print("All Showcase Assets Generated Successfully!")
