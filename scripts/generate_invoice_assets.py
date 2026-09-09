"""
Invoice Generator Pro Asset Generator
Builds:
- public/assets/invoice-gen-pro-images/homepage.png (Dashboard Showcase)
- public/assets/invoice-gen-pro-images/new-invoice.png (WYSIWYG Editor & Live PDF Preview)
- public/assets/invoice-gen-pro-images/setting.png (Studio Preferences & Multi-Currency)
- public/assets/invoice-gen-pro-images/invoice-hero-showcase.png (Case Study Hero Visual)
"""

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from build_showcase_assets import make_backdrop, draw_window_frame, draw_pill, f_reg, f_bold, f_mono, save_image

def build_invoice_homepage():
    base = make_backdrop(1920, 1080, glow_color=(16, 185, 129), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    
    # Browser window dimensions
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Invoice Generator Pro v2.4", url="https://invoicepro.aetherionlabs.com/dashboard", dark=True)
    
    # Sidebar
    sb_w = 260
    sb_bg = (13, 18, 30, 255)
    draw.rectangle([wx + 1, top_y + 1, wx + sb_w, wy + wh - 1], fill=sb_bg)
    draw.line([wx + sb_w, top_y, wx + sb_w, wy + wh], fill=(35, 45, 65, 255), width=1)
    
    # Sidebar Brand
    draw.rounded_rectangle([wx + 24, top_y + 24, wx + 56, top_y + 56], radius=8, fill=(16, 185, 129, 255))
    draw.text((wx + 34, top_y + 28), "$", font=f_bold(20), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 24), "Invoice Pro", font=f_bold(16), fill=(255, 255, 255, 255))
    draw.text((wx + 68, top_y + 44), "by Aetherion Labs", font=f_reg(11), fill=(148, 163, 184, 255))
    
    # Sidebar nav items
    nav_items = [
        ("Dashboard", True),
        ("Invoices & Quotes", False),
        ("Clients & Teams", False),
        ("Products & Rates", False),
        ("Financial Analytics", False),
        ("Tax & Templates", False),
        ("Settings", False)
    ]
    cur_y = top_y + 88
    for item, active in nav_items:
        if active:
            draw.rounded_rectangle([wx + 16, cur_y, wx + sb_w - 16, cur_y + 38], radius=8, fill=(30, 41, 59, 255), outline=(51, 65, 85, 255), width=1)
            draw.text((wx + 36, cur_y + 9), item, font=f_bold(13), fill=(52, 211, 153, 255))
        else:
            draw.text((wx + 36, cur_y + 9), item, font=f_reg(13), fill=(148, 163, 184, 255))
        cur_y += 46
        
    # Sidebar footer badge
    draw.rounded_rectangle([wx + 20, wy + wh - 70, wx + sb_w - 20, wy + wh - 24], radius=8, fill=(20, 28, 45, 255), outline=(40, 50, 75, 255), width=1)
    draw.text((wx + 32, wy + wh - 58), "100% Client-Side Engine", font=f_bold(11), fill=(16, 185, 129, 255))
    draw.text((wx + 32, wy + wh - 42), "Zero Server Data Retention", font=f_reg(10), fill=(148, 163, 184, 255))
    
    # Main Content Area
    cx = wx + sb_w + 36
    cy = top_y + 30
    cw = ww - sb_w - 72
    
    # Header row
    draw.text((cx, cy), "Invoices & Billing", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((cx, cy + 34), "Manage commercial invoices, track status, and export client-side PDFs", font=f_reg(13), fill=(148, 163, 184, 255))
    
    # Primary CTA Button
    btn_w, btn_h = 175, 42
    btn_x = cx + cw - btn_w
    draw.rounded_rectangle([btn_x, cy + 6, btn_x + btn_w, cy + 6 + btn_h], radius=8, fill=(16, 185, 129, 255))
    draw.text((btn_x + 22, cy + 17), "+ Create Invoice", font=f_bold(14), fill=(255, 255, 255, 255))
    
    # Stat Cards (4 columns)
    card_y = cy + 80
    card_w = (cw - 48) // 4
    card_h = 105
    stats = [
        ("TOTAL BILLED", "$68,450.00", "+14.2% vs last month", (16, 185, 129, 255)),
        ("PAID & CLEARED", "$52,100.00", "84% settlement rate", (52, 211, 153, 255)),
        ("PENDING DRAFTS", "$16,350.00", "3 invoices outstanding", (251, 191, 36, 255)),
        ("AVG PROCESSING", "0.28 sec", "Instant client-side jsPDF", (6, 182, 212, 255))
    ]
    for i, (label, val, sub, sub_col) in enumerate(stats):
        kx = cx + i * (card_w + 16)
        draw.rounded_rectangle([kx, card_y, kx + card_w, card_y + card_h], radius=12, fill=(16, 22, 35, 255), outline=(40, 50, 72, 255), width=1)
        draw.text((kx + 18, card_y + 14), label, font=f_bold(11), fill=(100, 116, 139, 255))
        draw.text((kx + 18, card_y + 36), val, font=f_bold(22), fill=(255, 255, 255, 255))
        draw.text((kx + 18, card_y + 74), sub, font=f_reg(11), fill=sub_col)
        
    # Search & Filter bar
    bar_y = card_y + card_h + 24
    draw.rounded_rectangle([cx, bar_y, cx + cw, bar_y + 44], radius=8, fill=(15, 20, 32, 255), outline=(35, 45, 65, 255), width=1)
    draw.text((cx + 16, bar_y + 13), "Search by client name, invoice number, or project tag...", font=f_reg(12), fill=(100, 116, 139, 255))
    draw_pill(draw, cx + cw - 280, bar_y + 8, "Status: All (12)", f_reg(11), bg=(25, 33, 50, 255), fg=(203, 213, 225, 255), border=(45, 55, 78, 255))
    draw_pill(draw, cx + cw - 150, bar_y + 8, "USD / CAD", f_reg(11), bg=(25, 33, 50, 255), fg=(203, 213, 225, 255), border=(45, 55, 78, 255))
    draw_pill(draw, cx + cw - 60, bar_y + 8, "Filter", f_reg(11), bg=(25, 33, 50, 255), fg=(203, 213, 225, 255), border=(45, 55, 78, 255))
    
    # Invoices Table
    tbl_y = bar_y + 58
    tbl_h = wy + wh - tbl_y - 28
    draw.rounded_rectangle([cx, tbl_y, cx + cw, tbl_y + tbl_h], radius=12, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    
    # Table Header
    th_y = tbl_y + 14
    cols = [
        ("INVOICE #", cx + 24),
        ("CLIENT / COMPANY", cx + 170),
        ("ISSUE DATE", cx + 460),
        ("DUE DATE", cx + 600),
        ("AMOUNT (USD)", cx + 740),
        ("STATUS", cx + 920),
        ("ACTIONS", cx + 1100)
    ]
    for name, pos in cols:
        draw.text((pos, th_y), name, font=f_bold(11), fill=(100, 116, 139, 255))
    draw.line([cx, th_y + 26, cx + cw, th_y + 26], fill=(30, 40, 60, 255), width=1)
    
    # Table Rows
    rows = [
        ("INV-2026-004", "Vercel Systems Inc.", "San Francisco, CA", "Oct 12, 2026", "Oct 26, 2026", "$6,480.00", "PAID", (16, 185, 129, 255), (16, 185, 129, 30)),
        ("INV-2026-003", "Apex Horizon Tech", "Austin, TX", "Oct 08, 2026", "Oct 22, 2026", "$12,850.00", "SENT", (59, 130, 246, 255), (59, 130, 246, 30)),
        ("INV-2026-002", "Nordic Studio Ltd.", "Toronto, ON", "Sep 28, 2026", "Oct 12, 2026", "$4,200.00", "PAID", (16, 185, 129, 255), (16, 185, 129, 30)),
        ("INV-2026-001", "CloudScale AI Corp", "Seattle, WA", "Sep 20, 2026", "Oct 04, 2026", "$8,900.00", "PAID", (16, 185, 129, 255), (16, 185, 129, 30)),
        ("QUO-2026-012", "Figma Design Labs", "San Francisco, CA", "Sep 15, 2026", "Sep 29, 2026", "$5,500.00", "DRAFT", (148, 163, 184, 255), (148, 163, 184, 30)),
        ("INV-2026-000", "Stripe Integrations", "South San Francisco", "Sep 02, 2026", "Sep 16, 2026", "$10,240.00", "PAID", (16, 185, 129, 255), (16, 185, 129, 30))
    ]
    row_y = th_y + 36
    for inv, client, loc, iss, due, amt, status, s_fg, s_bg in rows:
        draw.text((cx + 24, row_y + 10), inv, font=f_mono(12, bold=True), fill=(226, 232, 240, 255))
        draw.text((cx + 170, row_y + 6), client, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((cx + 170, row_y + 24), loc, font=f_reg(11), fill=(100, 116, 139, 255))
        draw.text((cx + 460, row_y + 11), iss, font=f_reg(12), fill=(148, 163, 184, 255))
        draw.text((cx + 600, row_y + 11), due, font=f_reg(12), fill=(148, 163, 184, 255))
        draw.text((cx + 740, row_y + 10), amt, font=f_bold(13), fill=(255, 255, 255, 255))
        
        # Status pill
        draw.rounded_rectangle([cx + 920, row_y + 8, cx + 990, row_y + 30], radius=11, fill=s_bg, outline=s_fg, width=1)
        draw.text((cx + 936, row_y + 11), status, font=f_bold(10), fill=s_fg)
        
        # Action links
        draw.text((cx + 1100, row_y + 11), "View  •  PDF  •  Duplicate", font=f_reg(11), fill=(52, 211, 153, 255))
        
        draw.line([cx, row_y + 44, cx + cw, row_y + 44], fill=(24, 32, 48, 255), width=1)
        row_y += 46
        
    save_image(base, "public/assets/invoice-gen-pro-images/homepage.png")

def build_invoice_new():
    base = make_backdrop(1920, 1080, glow_color=(59, 130, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Invoice Generator Pro — Live WYSIWYG Editor", url="https://invoicepro.aetherionlabs.com/invoices/new", dark=True)
    
    # Split layout: Left Editor (860px) + Right Document Preview (820px)
    left_w = 840
    right_w = 840
    lx = wx + 30
    rx = wx + ww - right_w - 30
    body_y = top_y + 24
    body_h = wy + wh - body_y - 24
    
    # Left Editor Card
    draw.rounded_rectangle([lx, body_y, lx + left_w, body_y + body_h], radius=14, fill=(14, 19, 31, 255), outline=(38, 48, 70, 255), width=1)
    
    # Editor Header
    draw.text((lx + 28, body_y + 20), "Invoice Editor", font=f_bold(20), fill=(255, 255, 255, 255))
    draw.text((lx + 28, body_y + 48), "Real-time state calculations with automatic live preview", font=f_reg(12), fill=(148, 163, 184, 255))
    draw_pill(draw, lx + left_w - 180, body_y + 24, "Auto-Saving Local", f_reg(11), bg=(16, 185, 129, 30), fg=(52, 211, 153, 255), border=(16, 185, 129, 255))
    
    # From & To fields
    f_y = body_y + 80
    # From Box
    draw.rounded_rectangle([lx + 28, f_y, lx + 400, f_y + 110], radius=8, fill=(18, 24, 40, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((lx + 40, f_y + 12), "FROM (YOUR BUSINESS)", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((lx + 40, f_y + 32), "Aetherion Labs Studio", font=f_bold(14), fill=(255, 255, 255, 255))
    draw.text((lx + 40, f_y + 54), "hello@aetherionlabs.com", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.text((lx + 40, f_y + 74), "US & Canada Delivery", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # To Box
    draw.rounded_rectangle([lx + 420, f_y, lx + left_w - 28, f_y + 110], radius=8, fill=(18, 24, 40, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((lx + 432, f_y + 12), "BILL TO (CLIENT)", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((lx + 432, f_y + 32), "Vercel Systems Inc.", font=f_bold(14), fill=(255, 255, 255, 255))
    draw.text((lx + 432, f_y + 54), "billing@vercel.com", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.text((lx + 432, f_y + 74), "340 S Lemon Ave, Walnut, CA", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Invoice Metadata Strip
    m_y = f_y + 124
    draw.rounded_rectangle([lx + 28, m_y, lx + left_w - 28, m_y + 60], radius=8, fill=(16, 22, 35, 255), outline=(35, 45, 65, 255), width=1)
    draw.text((lx + 42, m_y + 12), "Invoice #: INV-2026-004", font=f_bold(12), fill=(226, 232, 240, 255))
    draw.text((lx + 42, m_y + 34), "Currency: USD ($)", font=f_reg(11), fill=(148, 163, 184, 255))
    draw.text((lx + 280, m_y + 12), "Issue Date: Oct 14, 2026", font=f_reg(12), fill=(226, 232, 240, 255))
    draw.text((lx + 280, m_y + 34), "Due Date: Net 15 (Oct 29, 2026)", font=f_reg(11), fill=(148, 163, 184, 255))
    draw.text((lx + 560, m_y + 12), "Tax Template: US Sales (8.25%)", font=f_reg(12), fill=(226, 232, 240, 255))
    draw.text((lx + 560, m_y + 34), "Status: Ready to Export", font=f_bold(11), fill=(52, 211, 153, 255))
    
    # Line Items Editor Table
    li_y = m_y + 76
    draw.text((lx + 28, li_y), "Line Items & Deliverables", font=f_bold(14), fill=(255, 255, 255, 255))
    
    tbl_top = li_y + 26
    draw.rounded_rectangle([lx + 28, tbl_top, lx + left_w - 28, tbl_top + 280], radius=8, fill=(12, 16, 27, 255), outline=(32, 42, 60, 255), width=1)
    
    draw.text((lx + 44, tbl_top + 10), "DESCRIPTION", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((lx + 440, tbl_top + 10), "QTY", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((lx + 520, tbl_top + 10), "RATE", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((lx + 640, tbl_top + 10), "TOTAL", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.line([lx + 28, tbl_top + 28, lx + left_w - 28, tbl_top + 28], fill=(30, 40, 58, 255), width=1)
    
    items = [
        ("Full-Stack Next.js 14 Web Architecture", "1", "$3,800.00", "$3,800.00"),
        ("Custom AI Chatbot Integration & Prompt Routing", "1", "$1,600.00", "$1,600.00"),
        ("Client Portal & Stripe Billing Integration", "1", "$1,200.00", "$1,200.00"),
        ("Responsive Design System & Tailwind Polish", "1", "$850.00", "$850.00")
    ]
    cur_iy = tbl_top + 36
    for desc, qty, rate, tot in items:
        draw.text((lx + 44, cur_iy + 8), desc, font=f_reg(12), fill=(241, 245, 249, 255))
        draw.text((lx + 446, cur_iy + 8), qty, font=f_mono(12), fill=(203, 213, 225, 255))
        draw.text((lx + 520, cur_iy + 8), rate, font=f_mono(12), fill=(203, 213, 225, 255))
        draw.text((lx + 640, cur_iy + 8), tot, font=f_mono(12, bold=True), fill=(255, 255, 255, 255))
        draw.line([lx + 28, cur_iy + 36, lx + left_w - 28, cur_iy + 36], fill=(24, 32, 48, 255), width=1)
        cur_iy += 42
        
    # Add Item Button
    draw.rounded_rectangle([lx + 44, cur_iy + 8, lx + 200, cur_iy + 38], radius=6, fill=(24, 32, 50, 255), outline=(45, 58, 85, 255), width=1)
    draw.text((lx + 58, cur_iy + 15), "+ Add Line Item", font=f_bold(11), fill=(52, 211, 153, 255))
    
    # Financial Summary in Left Panel
    sum_y = tbl_top + 296
    draw.rounded_rectangle([lx + 28, sum_y, lx + left_w - 28, sum_y + 110], radius=8, fill=(18, 24, 38, 255), outline=(40, 50, 75, 255), width=1)
    draw.text((lx + 44, sum_y + 14), "Subtotal:", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.text((lx + 200, sum_y + 14), "$7,450.00", font=f_mono(12), fill=(255, 255, 255, 255))
    draw.text((lx + 44, sum_y + 38), "US Sales Tax (8.25%):", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.text((lx + 200, sum_y + 38), "+$614.63", font=f_mono(12), fill=(255, 255, 255, 255))
    draw.text((lx + 44, sum_y + 64), "Early Milestone Discount (5%):", font=f_reg(12), fill=(148, 163, 184, 255))
    draw.text((lx + 240, sum_y + 64), "-$372.50", font=f_mono(12), fill=(251, 191, 36, 255))
    
    draw.text((lx + left_w - 260, sum_y + 24), "TOTAL DUE", font=f_bold(11), fill=(100, 116, 139, 255))
    draw.text((lx + left_w - 260, sum_y + 44), "$7,692.13", font=f_bold(28), fill=(52, 211, 153, 255))
    
    # Right Panel: Realistic PDF Preview Document
    draw.rounded_rectangle([rx, body_y, rx + right_w, body_y + body_h], radius=14, fill=(18, 24, 38, 255), outline=(40, 50, 75, 255), width=1)
    
    # Preview Top Bar
    draw.text((rx + 28, body_y + 20), "Live WYSIWYG PDF Preview", font=f_bold(16), fill=(255, 255, 255, 255))
    draw_pill(draw, rx + right_w - 260, body_y + 18, "Export PDF (jsPDF)", f_bold(12), bg=(16, 185, 129, 255), fg=(255, 255, 255, 255))
    draw_pill(draw, rx + right_w - 90, body_y + 18, "Print", f_reg(12), bg=(30, 41, 59, 255), fg=(203, 213, 225, 255), border=(51, 65, 85, 255))
    
    # The Document Sheet (White high-fidelity rendered invoice paper)
    doc_x = rx + 45
    doc_y = body_y + 66
    doc_w = right_w - 90
    doc_h = body_h - 90
    draw.rounded_rectangle([doc_x, doc_y, doc_x + doc_w, doc_y + doc_h], radius=6, fill=(255, 255, 255, 255), outline=(200, 208, 220, 255), width=1)
    
    # Inside the rendered PDF sheet
    draw.text((doc_x + 40, doc_y + 36), "Aetherion Labs", font=f_bold(22), fill=(15, 23, 42, 255))
    draw.text((doc_x + 40, doc_y + 64), "Custom Software & Digital Product Studio\nhello@aetherionlabs.com • hammad.dpdns.org", font=f_reg(11), fill=(100, 116, 139, 255))
    
    draw.text((doc_x + doc_w - 180, doc_y + 34), "INVOICE", font=f_bold(24), fill=(16, 185, 129, 255))
    draw.text((doc_x + doc_w - 180, doc_y + 64), "INV-2026-004\nIssue: Oct 14, 2026\nDue: Oct 29, 2026", font=f_reg(11), fill=(71, 85, 105, 255))
    
    draw.line([doc_x + 40, doc_y + 120, doc_x + doc_w - 40, doc_y + 120], fill=(226, 232, 240, 255), width=1)
    
    draw.text((doc_x + 40, doc_y + 134), "BILLED TO:", font=f_bold(10), fill=(100, 116, 139, 255))
    draw.text((doc_x + 40, doc_y + 150), "Vercel Systems Inc.\n340 S Lemon Ave, Walnut, CA 91789\nAttn: Accounts Payable", font=f_reg(11), fill=(15, 23, 42, 255))
    
    # Mini item table in sheet
    s_th_y = doc_y + 220
    draw.rectangle([doc_x + 40, s_th_y, doc_x + doc_w - 40, s_th_y + 26], fill=(241, 245, 249, 255))
    draw.text((doc_x + 50, s_th_y + 6), "ITEM / SERVICE", font=f_bold(10), fill=(71, 85, 105, 255))
    draw.text((doc_x + 450, s_th_y + 6), "QTY", font=f_bold(10), fill=(71, 85, 105, 255))
    draw.text((doc_x + 520, s_th_y + 6), "RATE", font=f_bold(10), fill=(71, 85, 105, 255))
    draw.text((doc_x + 630, s_th_y + 6), "AMOUNT", font=f_bold(10), fill=(71, 85, 105, 255))
    
    s_r_y = s_th_y + 34
    for desc, qty, rate, tot in items:
        draw.text((doc_x + 50, s_r_y), desc, font=f_reg(11), fill=(15, 23, 42, 255))
        draw.text((doc_x + 456, s_r_y), qty, font=f_mono(11), fill=(71, 85, 105, 255))
        draw.text((doc_x + 520, s_r_y), rate, font=f_mono(11), fill=(71, 85, 105, 255))
        draw.text((doc_x + 630, s_r_y), tot, font=f_mono(11, bold=True), fill=(15, 23, 42, 255))
        draw.line([doc_x + 40, s_r_y + 22, doc_x + doc_w - 40, s_r_y + 22], fill=(241, 245, 249, 255), width=1)
        s_r_y += 30
        
    # Sheet totals
    s_tot_y = s_r_y + 20
    draw.text((doc_x + doc_w - 240, s_tot_y), "Subtotal:", font=f_reg(11), fill=(100, 116, 139, 255))
    draw.text((doc_x + doc_w - 120, s_tot_y), "$7,450.00", font=f_mono(11), fill=(15, 23, 42, 255))
    draw.text((doc_x + doc_w - 240, s_tot_y + 22), "Sales Tax (8.25%):", font=f_reg(11), fill=(100, 116, 139, 255))
    draw.text((doc_x + doc_w - 120, s_tot_y + 22), "$614.63", font=f_mono(11), fill=(15, 23, 42, 255))
    draw.text((doc_x + doc_w - 240, s_tot_y + 44), "Discount (5%):", font=f_reg(11), fill=(100, 116, 139, 255))
    draw.text((doc_x + doc_w - 120, s_tot_y + 44), "-$372.50", font=f_mono(11), fill=(234, 88, 12, 255))
    
    draw.line([doc_x + doc_w - 240, s_tot_y + 68, doc_x + doc_w - 40, s_tot_y + 68], fill=(15, 23, 42, 255), width=1)
    draw.text((doc_x + doc_w - 240, s_tot_y + 76), "TOTAL DUE:", font=f_bold(13), fill=(15, 23, 42, 255))
    draw.text((doc_x + doc_w - 140, s_tot_y + 74), "$7,692.13", font=f_bold(16), fill=(16, 185, 129, 255))
    
    # Payment terms
    draw.text((doc_x + 40, s_tot_y + 40), "Payment Instructions:\nACH Routing: 121000358 | Account: ••••4892\nThank you for partnering with Aetherion Labs!", font=f_reg(10), fill=(100, 116, 139, 255))
    
    save_image(base, "public/assets/invoice-gen-pro-images/new-invoice.png")

def build_invoice_settings():
    base = make_backdrop(1920, 1080, glow_color=(139, 92, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Invoice Generator Pro — Studio Settings & Templates", url="https://invoicepro.aetherionlabs.com/settings", dark=True)
    
    # Modal / Centered Settings Card
    mw, mh = 1080, 820
    mx = wx + (ww - mw) // 2
    my = top_y + (wh - 46 - mh) // 2
    
    draw.rounded_rectangle([mx, my, mx + mw, my + mh], radius=16, fill=(15, 21, 34, 255), outline=(42, 54, 78, 255), width=1)
    
    # Header
    draw.text((mx + 40, my + 30), "Workspace Settings & Regional Defaults", font=f_bold(22), fill=(255, 255, 255, 255))
    draw.text((mx + 40, my + 60), "Configure international currencies, tax systems, brand assets, and local data backups", font=f_reg(13), fill=(148, 163, 184, 255))
    draw.line([mx, my + 94, mx + mw, my + 94], fill=(30, 40, 60, 255), width=1)
    
    # Section 1: Currency & Locale
    s1_y = my + 115
    draw.text((mx + 40, s1_y), "CURRENCY & LOCALE CONFIGURATION", font=f_bold(11), fill=(16, 185, 129, 255))
    
    currs = [
        ("USD ($)", "United States Dollar (Default)", True),
        ("CAD ($)", "Canadian Dollar", False),
        ("EUR (€)", "Eurozone Standard", False),
        ("GBP (£)", "British Pound", False)
    ]
    for i, (code, desc, act) in enumerate(currs):
        cx = mx + 40 + i * 242
        cy = s1_y + 24
        bg = (24, 36, 56, 255) if act else (18, 24, 38, 255)
        bdr = (16, 185, 129, 255) if act else (35, 46, 68, 255)
        draw.rounded_rectangle([cx, cy, cx + 230, cy + 68], radius=8, fill=bg, outline=bdr, width=1)
        draw.text((cx + 16, cy + 12), code, font=f_bold(15), fill=(255, 255, 255, 255) if act else (203, 213, 225, 255))
        draw.text((cx + 16, cy + 38), desc, font=f_reg(10), fill=(52, 211, 153, 255) if act else (100, 116, 139, 255))
        
    # Section 2: Tax Systems
    s2_y = s1_y + 115
    draw.text((mx + 40, s2_y), "TAX & JURISDICTION TEMPLATES", font=f_bold(11), fill=(59, 130, 246, 255))
    taxes = [
        ("US State Sales Tax", "Configurable single or dual-tier rate (e.g., California 8.25%, Texas 6.25%)"),
        ("Canadian GST / HST / PST", "Automated provincial tax calculation (Ontario 13% HST, BC 12% GST/PST)"),
        ("Zero-Tax / Exempt Export", "For cross-border digital services and tax-exempt B2B engagements")
    ]
    for i, (name, dsc) in enumerate(taxes):
        ty = s2_y + 24 + i * 58
        draw.rounded_rectangle([mx + 40, ty, mx + mw - 40, ty + 48], radius=8, fill=(18, 24, 38, 255), outline=(35, 46, 68, 255), width=1)
        draw.ellipse([mx + 56, ty + 18, mx + 68, ty + 30], fill=(59, 130, 246, 255) if i == 0 else (30, 42, 60, 255))
        draw.text((mx + 82, ty + 14), name, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((mx + 300, ty + 15), dsc, font=f_reg(11), fill=(148, 163, 184, 255))
        
    # Section 3: Privacy & Local Data Storage
    s3_y = s2_y + 220
    draw.text((mx + 40, s3_y), "DATA PRIVACY & PERSISTENCE ARCHITECTURE", font=f_bold(11), fill=(139, 92, 246, 255))
    
    # Feature cards
    draw.rounded_rectangle([mx + 40, s3_y + 24, mx + 510, s3_y + 140], radius=10, fill=(18, 24, 38, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((mx + 60, s3_y + 40), "Local IndexedDB Vault", font=f_bold(15), fill=(255, 255, 255, 255))
    draw.text((mx + 60, s3_y + 64), "• All invoices stored in browser IndexedDB\n• Zero database server leaks\n• Works 100% offline without internet connection", font=f_reg(11), fill=(148, 163, 184, 255))
    
    draw.rounded_rectangle([mx + 530, s3_y + 24, mx + mw - 40, s3_y + 140], radius=10, fill=(18, 24, 38, 255), outline=(40, 52, 75, 255), width=1)
    draw.text((mx + 550, s3_y + 40), "1-Click Backup & JSON Migration", font=f_bold(15), fill=(255, 255, 255, 255))
    draw.text((mx + 550, s3_y + 64), "• Export all client & invoice archives to `.json`\n• Instant restoration on any device\n• Vector-clean jsPDF layout generation", font=f_reg(11), fill=(148, 163, 184, 255))
    
    # Action buttons at bottom
    btn_y = my + mh - 80
    draw.rounded_rectangle([mx + mw - 220, btn_y, mx + mw - 40, btn_y + 44], radius=8, fill=(16, 185, 129, 255))
    draw.text((mx + mw - 188, btn_y + 12), "Save Preferences", font=f_bold(13), fill=(255, 255, 255, 255))
    
    draw.rounded_rectangle([mx + mw - 390, btn_y, mx + mw - 235, btn_y + 44], radius=8, fill=(26, 34, 52, 255), outline=(45, 58, 85, 255), width=1)
    draw.text((mx + mw - 365, btn_y + 12), "Export JSON Backup", font=f_reg(13), fill=(203, 213, 225, 255))
    
    save_image(base, "public/assets/invoice-gen-pro-images/setting.png")

def build_invoice_hero():
    # Hero composite with isometric depth / floating detail badge
    base = make_backdrop(1920, 1080, glow_color=(6, 182, 212), center=(960, 520), glow_r=800)
    draw = ImageDraw.Draw(base)
    
    # Draw main window
    wx, wy, ww, wh = 100, 60, 1500, 880
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Invoice Generator Pro — Case Study Showcase", url="https://invoicepro.aetherionlabs.com", dark=True)
    
    # Internal showcase preview
    draw.rectangle([wx + 1, top_y, wx + ww - 1, wy + wh - 1], fill=(12, 16, 28, 255))
    
    # Left mini dashboard
    draw.text((wx + 40, top_y + 40), "Product Showcase: Client-Side Invoice Engine", font=f_bold(26), fill=(255, 255, 255, 255))
    draw.text((wx + 40, top_y + 76), "Engineered for small businesses and freelance engineers seeking high-speed billing with zero SaaS fees.", font=f_reg(14), fill=(148, 163, 184, 255))
    
    # Feature metric boxes
    boxes = [
        ("0 ms", "Server Latency", "100% Client Browser Execution"),
        ("100%", "Financial Privacy", "Zero Server Storage of Client Data"),
        ("100 / 100", "Lighthouse Score", "Perfect Performance & Accessibility")
    ]
    for i, (v, t, d) in enumerate(boxes):
        bx = wx + 40 + i * 360
        by = top_y + 130
        draw.rounded_rectangle([bx, by, bx + 330, by + 110], radius=10, fill=(18, 24, 40, 255), outline=(38, 50, 75, 255), width=1)
        draw.text((bx + 20, by + 16), v, font=f_bold(24), fill=(52, 211, 153, 255))
        draw.text((bx + 20, by + 50), t, font=f_bold(13), fill=(255, 255, 255, 255))
        draw.text((bx + 20, by + 74), d, font=f_reg(11), fill=(148, 163, 184, 255))
        
    # Floating Right-Hand Mobile & Document Device Card
    fx, fy, fw, fh = 1180, 220, 640, 780
    draw.rounded_rectangle([fx, fy, fx + fw, fy + fh], radius=16, fill=(16, 22, 36, 255), outline=(52, 211, 153, 255), width=2)
    
    # Mobile Mockup Header inside card
    draw.text((fx + 30, fy + 24), "Mobile & Tablet Responsive", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((fx + 30, fy + 50), "Fluid WYSIWYG editing on all screen sizes", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Render mini invoice inside floating card
    mx = fx + 30
    my = fy + 80
    mw = fw - 60
    draw.rounded_rectangle([mx, my, mx + mw, my + 640], radius=10, fill=(255, 255, 255, 255), outline=(220, 228, 240, 255), width=1)
    
    draw.text((mx + 24, my + 24), "Aetherion Labs", font=f_bold(18), fill=(15, 23, 42, 255))
    draw.text((mx + mw - 140, my + 24), "PAID", font=f_bold(16), fill=(16, 185, 129, 255))
    draw.text((mx + 24, my + 54), "Client: Vercel Systems Inc. • Walnut, CA", font=f_reg(11), fill=(71, 85, 105, 255))
    draw.text((mx + 24, my + 72), "Total Amount: $7,692.13 USD", font=f_bold(13), fill=(15, 23, 42, 255))
    
    draw.line([mx + 24, my + 100, mx + mw - 24, my + 100], fill=(226, 232, 240, 255), width=1)
    
    # Mini summary items
    draw.text((mx + 24, my + 116), "• Next.js 14 Custom Frontend: $3,800.00\n• AI Chatbot Integration: $1,600.00\n• Client Portal & Stripe Setup: $1,200.00\n• Responsive Tailwind Design: $850.00", font=f_reg(11), fill=(51, 65, 85, 255))
    
    draw.rounded_rectangle([mx + 24, my + 210, mx + mw - 24, my + 254], radius=6, fill=(16, 185, 129, 255))
    draw.text((mx + 180, my + 224), "Download PDF Invoice", font=f_bold(13), fill=(255, 255, 255, 255))
    
    save_image(base, "public/assets/invoice-gen-pro-images/invoice-hero-showcase.png")

if __name__ == "__main__":
    print("Generating Invoice Generator Pro Assets...")
    build_invoice_homepage()
    build_invoice_new()
    build_invoice_settings()
    build_invoice_hero()
    print("Invoice Generator Pro Assets Generated Successfully!")
