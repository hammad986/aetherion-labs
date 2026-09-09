"""
Rich CV and Video QA Asset Generator
Builds detailed, distinct, and realistic product showcases for:
- Image Toolkit Pro (6 distinct screenshots)
- Advanced Video QA System (5 distinct screenshots)
"""

import math
from PIL import Image, ImageDraw, ImageFont
from build_showcase_assets import (
    make_backdrop, draw_window_frame, draw_pill,
    f_reg, f_bold, f_mono, save_image
)

# =====================================================================
# IMAGE TOOLKIT PRO: 6 DISTINCT SCREENS
# =====================================================================

def build_itp_01_workspace():
    base = make_backdrop(1920, 1080, glow_color=(13, 148, 136), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Image Inspection Workbench", url="desktop://imagetoolkitpro/workspace", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(13, 18, 28, 255))
    draw.text((wx + 30, top_y + 16), "Image Toolkit Pro — Computer Vision Inspection Workbench", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Python 3.10 • OpenCV 4.8 (cv2) • NumPy Matrix Analysis • RGB / HSV Color Spaces", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Left Operations Panel (240px)
    draw.rounded_rectangle([wx + 30, top_y + 70, wx + 270, wy + wh - 30], radius=10, fill=(18, 26, 40, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((wx + 46, top_y + 86), "OPENCV OPERATIONS", font=f_bold(11), fill=(45, 212, 191, 255))
    ops = [("Workspace & ROI", True), ("Geometric Drawing", False), ("Haar Detection", False), ("Canny Edge Filter", False), ("Batch Processing", False), ("Preferences", False)]
    oy = top_y + 115
    for op, act in ops:
        bg = (28, 44, 68, 255) if act else (22, 32, 50, 255)
        bdr = (45, 212, 191, 255) if act else (35, 48, 70, 255)
        draw.rounded_rectangle([wx + 46, oy, wx + 254, oy + 38], radius=6, fill=bg, outline=bdr, width=1)
        draw.text((wx + 58, oy + 10), op, font=f_bold(12) if act else f_reg(12), fill=(45, 212, 191, 255) if act else (203, 213, 225, 255))
        oy += 46
        
    # Center Canvas with Rich Test Pattern (1060px)
    cx = wx + 290
    cw = ww - 680
    cy = top_y + 70
    ch = wy + wh - cy - 30
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=10, fill=(9, 13, 22, 255), outline=(36, 50, 75, 255), width=1)
    
    # Canvas Frame
    vx, vy, vw, vh = cx + 30, cy + 30, cw - 60, ch - 60
    draw.rectangle([vx, vy, vx + vw, vy + vh], fill=(16, 23, 36, 255), outline=(40, 55, 80, 255), width=1)
    
    # Render simulated test visual with geometric shapes and color gradients
    for i in range(12):
        shade = 30 + i * 15
        draw.rectangle([vx + 60 + i * 55, vy + 60, vx + 110 + i * 55, vy + 300], fill=(shade, shade + 20, shade + 50, 255))
    draw.ellipse([vx + vw - 360, vy + 80, vx + vw - 120, vy + 320], fill=(13, 148, 136, 180), outline=(45, 212, 191, 255), width=3)
    draw.rectangle([vx + 60, vy + 340, vx + vw - 120, vy + 460], fill=(22, 34, 52, 255), outline=(45, 60, 90, 255), width=1)
    draw.text((vx + 80, vy + 370), "MATRIX SHAPE: [2160, 3840, 3] uint8 • STRIDE: 11520 bytes • COLORSPACE: BGR_TO_RGB", font=f_mono(13, bold=True), fill=(45, 212, 191, 255))
    draw.text((vx + 80, vy + 400), "Active Cursor: (x: 1920, y: 1080) • Pixel Color: R: 184, G: 212, B: 245 • Luminance: 0.812", font=f_mono(12), fill=(203, 213, 225, 255))
    
    # Right Histograms & Analysis (350px)
    rx = cx + cw + 20
    rw = ww - (cx - wx) - cw - 40
    draw.rounded_rectangle([rx, cy, rx + rw, cy + ch], radius=10, fill=(18, 26, 40, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((rx + 20, cy + 20), "RGB CHANNEL HISTOGRAMS", font=f_bold(11), fill=(45, 212, 191, 255))
    
    # Draw Red, Green, Blue histograms
    colors = [("Red Channel", (239, 68, 68, 255)), ("Green Channel", (34, 197, 94, 255)), ("Blue Channel", (59, 130, 246, 255))]
    hy = cy + 50
    for name, col in colors:
        draw.text((rx + 20, hy), name, font=f_bold(11), fill=col)
        draw.rounded_rectangle([rx + 20, hy + 20, rx + rw - 20, hy + 130], radius=6, fill=(12, 17, 27, 255), outline=(32, 44, 66, 255), width=1)
        # Curve
        pts = []
        for s in range(25):
            px = rx + 25 + int(s * ((rw - 50) / 24))
            val = math.sin(s * 0.35) * 0.4 + 0.5
            py = hy + 120 - int(val * 85)
            pts.append((px, py))
        for j in range(len(pts) - 1):
            draw.line([pts[j], pts[j+1]], fill=col, width=2)
        hy += 150
        
    save_image(base, "public/assets/imagetoolkit_images/01_workspace.png")

def build_itp_02_drawing():
    base = make_backdrop(1920, 1080, glow_color=(59, 130, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Geometric Drawing & Masking", url="desktop://imagetoolkitpro/drawing", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(13, 18, 28, 255))
    draw.text((wx + 30, top_y + 16), "Geometric Masking & Sub-Pixel Annotation Toolkit", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Vector ROI extraction • Polygon Masking • Alpha Blending (cv2.addWeighted)", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Left Toolbar (120px)
    tools_x = wx + 30
    draw.rounded_rectangle([tools_x, top_y + 70, tools_x + 120, wy + wh - 30], radius=10, fill=(18, 26, 40, 255), outline=(36, 50, 75, 255), width=1)
    tools = ["Cursor", "BBox", "Polygon", "Circle", "Brush", "Eraser", "Layers"]
    ty = top_y + 90
    for t in tools:
        act = (t == "Polygon")
        draw.rounded_rectangle([tools_x + 15, ty, tools_x + 105, ty + 38], radius=6, fill=(35, 55, 85, 255) if act else (22, 32, 50, 255), outline=(59, 130, 246, 255) if act else (35, 48, 70, 255), width=1)
        draw.text((tools_x + 28, ty + 10), t, font=f_bold(11) if act else f_reg(11), fill=(96, 165, 250, 255) if act else (203, 213, 225, 255))
        ty += 50
        
    # Main Canvas (1180px)
    cx = tools_x + 140
    cw = 1140
    cy = top_y + 70
    ch = wy + wh - cy - 30
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=10, fill=(9, 13, 22, 255), outline=(36, 50, 75, 255), width=1)
    
    # Drawn Polygons on canvas
    poly1 = [(cx + 150, cy + 120), (cx + 520, cy + 90), (cx + 680, cy + 340), (cx + 420, cy + 480), (cx + 180, cy + 380)]
    draw.polygon(poly1, fill=(59, 130, 246, 60), outline=(59, 130, 246, 255))
    for px, py in poly1:
        draw.ellipse([px - 5, py - 5, px + 5, py + 5], fill=(255, 255, 255, 255))
    draw.text((cx + 280, cy + 260), "POLYGON_MASK_01 (Area: 142,800 px)", font=f_mono(12, bold=True), fill=(96, 165, 250, 255))
    
    # Circle ROI
    draw.ellipse([cx + 680, cy + 200, cx + 1020, cy + 540], fill=(16, 185, 129, 50), outline=(16, 185, 129, 255), width=2)
    draw.text((cx + 740, cy + 360), "CIRCLE_ROI: R = 170px", font=f_mono(12, bold=True), fill=(52, 211, 153, 255))
    
    # Right Layer List (380px)
    rx = cx + cw + 20
    rw = ww - (cx - wx) - cw - 40
    draw.rounded_rectangle([rx, cy, rx + rw, cy + ch], radius=10, fill=(18, 26, 40, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((rx + 20, cy + 20), "ACTIVE ANNOTATION LAYERS", font=f_bold(11), fill=(59, 130, 246, 255))
    
    layers = [
        ("Layer 1: Polygon_ROI_Primary", "Vertices: 5 • Area: 142.8k px", True),
        ("Layer 2: Circle_Target_Region", "Radius: 170px • Center: (850, 370)", True),
        ("Layer 3: BoundingBox_Context", "Coords: [120, 80, 640, 480]", False),
        ("Layer 4: Alpha_Mask_Invert", "Blend Weight: 0.65 (cv2.addWeighted)", True)
    ]
    ly = cy + 50
    for l_tit, l_sub, vis in layers:
        draw.rounded_rectangle([rx + 16, ly, rx + rw - 16, ly + 64], radius=8, fill=(24, 34, 52, 255), outline=(40, 55, 80, 255), width=1)
        draw.text((rx + 30, ly + 12), l_tit, font=f_bold(12), fill=(255, 255, 255, 255))
        draw.text((rx + 30, ly + 34), l_sub, font=f_reg(11), fill=(148, 163, 184, 255))
        draw_pill(draw, rx + rw - 100, ly + 14, "VISIBLE" if vis else "MUTED", f_bold(9), bg=(16, 185, 129, 30) if vis else (40, 50, 70, 255), fg=(52, 211, 153, 255) if vis else (148, 163, 184, 255))
        ly += 74
        
    save_image(base, "public/assets/imagetoolkit_images/02_drawing_tools.png")

def build_itp_03_detection():
    base = make_backdrop(1920, 1080, glow_color=(234, 88, 12), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Haar Cascade & Object Detection Analytics", url="desktop://imagetoolkitpro/detection", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(13, 18, 28, 255))
    draw.text((wx + 30, top_y + 16), "Real-Time Object Detection & Haar Cascade Analytics", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "cv2.CascadeClassifier • Sub-Pixel Landmark Alignment • High-Throughput Matrix Scoring", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Left Viewport (1180px)
    cx = wx + 30
    cw = 1160
    cy = top_y + 70
    ch = wy + wh - cy - 30
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=10, fill=(9, 13, 22, 255), outline=(36, 50, 75, 255), width=1)
    
    # Render 3 Detection Targets with Neon Boxes
    targets = [
        ("TARGET_01: FACE", cx + 120, cy + 100, 320, 380, "CONF: 99.4%", (234, 88, 12, 255)),
        ("TARGET_02: FACE", cx + 520, cy + 140, 280, 340, "CONF: 98.6%", (249, 115, 22, 255)),
        ("TARGET_03: PROFILE", cx + 860, cy + 180, 220, 280, "CONF: 96.1%", (251, 146, 60, 255))
    ]
    for lbl, tx, ty, tw, th, conf, col in targets:
        draw.rectangle([tx, ty, tx + tw, ty + th], outline=col, width=2)
        draw.rectangle([tx, ty - 26, tx + 180, ty], fill=col)
        draw.text((tx + 8, ty - 22), f"{lbl} {conf}", font=f_mono(10, bold=True), fill=(255, 255, 255, 255))
        # Corner markers
        cs = 18
        draw.line([tx, ty, tx + cs, ty], fill=(255, 255, 255, 255), width=3)
        draw.line([tx, ty, tx, ty + cs], fill=(255, 255, 255, 255), width=3)
        
    # Right Detection Analytics (500px)
    rx = cx + cw + 20
    rw = ww - (cx - wx) - cw - 40
    draw.rounded_rectangle([rx, cy, rx + rw, cy + ch], radius=10, fill=(18, 26, 40, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((rx + 20, cy + 20), "DETECTION PERFORMANCE TELEMETRY", font=f_bold(11), fill=(249, 115, 22, 255))
    
    stats = [
        ("Detected Targets", "3 Confirmed Objects"),
        ("Model Pipeline", "Haar Cascade FrontalFace Alt2"),
        ("Scale Factor", "1.08 • MinNeighbors: 5"),
        ("Total Inference Time", "14.2 ms (70.4 FPS)"),
        ("Memory Footprint", "48.2 MB allocated"),
        ("False Positive Filter", "Active (Threshold: 0.95)")
    ]
    sy = cy + 60
    for k, v in stats:
        draw.text((rx + 20, sy), k, font=f_bold(12), fill=(203, 213, 225, 255))
        draw.text((rx + 20, sy + 20), v, font=f_reg(12), fill=(251, 146, 60, 255))
        draw.line([rx + 20, sy + 44, rx + rw - 20, sy + 44], fill=(30, 42, 65, 255), width=1)
        sy += 54
        
    save_image(base, "public/assets/imagetoolkit_images/03_detection_analytics.png")

def build_itp_04_webcam():
    base = make_backdrop(1920, 1080, glow_color=(16, 185, 129), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Live Video Stream & Canny Edge Filter", url="desktop://imagetoolkitpro/webcam", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(13, 18, 28, 255))
    draw.text((wx + 30, top_y + 16), "Live Camera Stream & Real-Time Canny Edge Detection", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "DirectShow / V4L2 Device Ingestion • 60 FPS Asynchronous Threading • Double-Buffered Frame Pipe", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Full Screen Video Frame with Edge Contours
    cx = wx + 30
    cw = ww - 60
    cy = top_y + 70
    ch = wy + wh - cy - 30
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=10, fill=(8, 12, 20, 255), outline=(36, 50, 75, 255), width=1)
    
    # Render simulated Canny wireframe edges (white contours on dark field)
    for row in range(15):
        for col in range(25):
            x1 = cx + 80 + col * 60
            y1 = cy + 80 + row * 45
            if (row + col) % 3 == 0:
                draw.line([x1, y1, x1 + 40, y1 + 20], fill=(255, 255, 255, 180), width=1)
            elif (row + col) % 5 == 0:
                draw.arc([x1, y1, x1 + 45, y1 + 45], 0, 180, fill=(45, 212, 191, 220), width=1)
                
    # HUD Overlay on video
    draw_pill(draw, cx + 40, cy + 40, "LIVE CAMERA: 1920x1080 @ 59.8 FPS", f_mono(12, bold=True), bg=(16, 185, 129, 40), fg=(52, 211, 153, 255), border=(16, 185, 129, 255))
    draw_pill(draw, cx + 380, cy + 40, "FILTER: CANNY (Threshold1: 50, Threshold2: 150)", f_mono(12, bold=True), bg=(6, 182, 212, 40), fg=(34, 211, 238, 255), border=(6, 182, 212, 255))
    draw_pill(draw, cx + cw - 260, cy + 40, "QUEUE LATENCY: 3.2 ms", f_mono(12, bold=True), bg=(244, 114, 182, 40), fg=(244, 114, 182, 255))
    
    save_image(base, "public/assets/imagetoolkit_images/04_webcam_recording.png")

def build_itp_05_batch():
    base = make_backdrop(1920, 1080, glow_color=(99, 102, 241), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Multithreaded Daemon Batch Queue", url="desktop://imagetoolkitpro/batch", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(13, 18, 28, 255))
    draw.text((wx + 30, top_y + 16), "Asynchronous Multithreaded Batch Processing Queue", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Python `concurrent.futures.ThreadPoolExecutor` • Thread-Safe Queues • Zero UI Thread Stalls", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Progress Card Top
    px = wx + 30
    pw = ww - 60
    py = top_y + 70
    draw.rounded_rectangle([px, py, px + pw, py + 110], radius=10, fill=(18, 26, 40, 255), outline=(40, 55, 80, 255), width=1)
    draw.text((px + 24, py + 16), "OVERALL BATCH PROGRESS: 420 / 500 IMAGES COMPLETED (84%)", font=f_bold(14), fill=(255, 255, 255, 255))
    draw.text((px + pw - 240, py + 16), "Est. Time Remaining: 12.4s", font=f_mono(12), fill=(148, 163, 184, 255))
    
    # Main Progress Bar
    draw.rounded_rectangle([px + 24, py + 48, px + pw - 24, py + 74], radius=6, fill=(12, 16, 26, 255))
    draw.rounded_rectangle([px + 24, py + 48, px + int((pw - 48) * 0.84), py + 74], radius=6, fill=(99, 102, 241, 255))
    
    # 8 Thread Worker Cards
    ty = py + 130
    card_w = (pw - 48) // 4
    card_h = 240
    for row in range(2):
        for col in range(4):
            idx = row * 4 + col + 1
            kx = px + col * (card_w + 16)
            ky = ty + row * (card_h + 16)
            draw.rounded_rectangle([kx, ky, kx + card_w, ky + card_h], radius=8, fill=(16, 22, 36, 255), outline=(35, 48, 70, 255), width=1)
            draw.text((kx + 16, ky + 14), f"Worker Thread #{idx}", font=f_bold(13), fill=(165, 180, 252, 255))
            draw_pill(draw, kx + card_w - 90, ky + 12, "RUNNING", f_bold(9), bg=(16, 185, 129, 30), fg=(52, 211, 153, 255))
            draw.text((kx + 16, ky + 48), f"File: raw_dataset_img_{idx*12+44}.tif\nResolution: 4096 x 3072\nOperation: GaussianBlur + Canny\nSpeed: 38.2 img/sec", font=f_reg(11), fill=(148, 163, 184, 255))
            
    save_image(base, "public/assets/imagetoolkit_images/05_batch_processing.png")

def build_itp_06_preferences():
    base = make_backdrop(1920, 1080, glow_color=(244, 114, 182), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Image Toolkit Pro — Hardware Acceleration & Preferences", url="desktop://imagetoolkitpro/preferences", dark=True)
    
    mw, mh = 1040, 800
    mx = wx + (ww - mw) // 2
    my = top_y + (wh - 46 - mh) // 2
    draw.rounded_rectangle([mx, my, mx + mw, my + mh], radius=16, fill=(15, 21, 34, 255), outline=(42, 54, 78, 255), width=1)
    
    draw.text((mx + 40, my + 30), "OpenCV Engine Build & Threading Preferences", font=f_bold(22), fill=(255, 255, 255, 255))
    draw.text((mx + 40, my + 60), "Configure hardware acceleration flags, daemon thread pools, and memory caching limits", font=f_reg(13), fill=(148, 163, 184, 255))
    draw.line([mx, my + 94, mx + mw, my + 94], fill=(30, 40, 60, 255), width=1)
    
    save_image(base, "public/assets/imagetoolkit_images/06_preferences_about.png")


# =====================================================================
# ADVANCED VIDEO QA SYSTEM: 5 DISTINCT SCREENS
# =====================================================================

def build_video_qa_01_shell():
    base = make_backdrop(1920, 1080, glow_color=(168, 85, 247), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Advanced Video QA Pro — Research Studio Shell", url="desktop://videoqa/workspace", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
    draw.text((wx + 30, top_y + 16), "Advanced Video QA Pro — Multimodal Video Knowledge Workstation", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Python 3.11 • PyQt6 Native GUI • Whisper Transcription • FAISS Vector Store • LangChain RAG", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Left Project Library (280px)
    draw.rounded_rectangle([wx + 30, top_y + 70, wx + 310, wy + wh - 30], radius=10, fill=(16, 22, 36, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((wx + 46, top_y + 86), "PROJECT VIDEO REPOSITORY", font=f_bold(11), fill=(192, 132, 252, 255))
    vids = [
        ("Stanford_CS229_Lec04.mp4", "01:28:40 • 1,420 Chunks", True),
        ("MIT_DeepLearning_2026.mp4", "00:54:12 • 890 Chunks", False),
        ("NeurIPS_Keynote_Speech.mp4", "01:12:05 • 1,180 Chunks", False),
        ("Quantum_Algorithms_Symposium.mp4", "02:04:30 • 2,100 Chunks", False)
    ]
    vy = top_y + 115
    for fn, meta, act in vids:
        bg = (28, 38, 62, 255) if act else (20, 28, 46, 255)
        draw.rounded_rectangle([wx + 46, vy, wx + 294, vy + 58], radius=6, fill=bg, outline=(168, 85, 247, 255) if act else (35, 48, 70, 255), width=1)
        draw.text((wx + 58, vy + 10), fn, font=f_bold(11), fill=(255, 255, 255, 255) if act else (203, 213, 225, 255))
        draw.text((wx + 58, vy + 32), meta, font=f_reg(10), fill=(192, 132, 252, 255) if act else (148, 163, 184, 255))
        vy += 68
        
    # Center Video Player with Waveform Scrubber (960px)
    cx = wx + 330
    cw = ww - 780
    cy = top_y + 70
    ch = wy + wh - cy - 30
    draw.rounded_rectangle([cx, cy, cx + cw, cy + ch], radius=10, fill=(8, 12, 20, 255), outline=(36, 50, 75, 255), width=1)
    
    # Active Screen Frame
    draw.rectangle([cx + 30, cy + 30, cx + cw - 30, cy + ch - 160], fill=(16, 22, 35, 255))
    draw.text((cx + 50, cy + 50), "STANFORD CS229: MACHINE LEARNING & LOSS REGULARIZATION", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((cx + 50, cy + 80), "Speaker: Prof. Andrew Ng • Topic: Convex Optimization & L2 Regularization", font=f_reg(13), fill=(192, 132, 252, 255))
    
    # Waveform Audio Track
    sc_y = cy + ch - 120
    draw.rounded_rectangle([cx + 30, sc_y, cx + cw - 30, sc_y + 44], radius=6, fill=(22, 30, 48, 255))
    draw.rectangle([cx + 30, sc_y, cx + 480, sc_y + 44], fill=(168, 85, 247, 180))
    draw.text((cx + 40, sc_y + 14), "00:42:15 / 01:28:40 (Synchronized Seek)", font=f_mono(12, bold=True), fill=(255, 255, 255, 255))
    
    # Right Knowledge Graph & RAG Inspector (430px)
    rx = cx + cw + 20
    rw = ww - (cx - wx) - cw - 40
    draw.rounded_rectangle([rx, cy, rx + rw, cy + ch], radius=10, fill=(16, 22, 36, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((rx + 20, cy + 20), "RAG FAISS KNOWLEDGE GRAPH", font=f_bold(11), fill=(192, 132, 252, 255))
    draw.text((rx + 20, cy + 50), "• Vector Embeddings: 1,536-dim\n• Similarity Metric: Inner Product (IP)\n• Chunk Window: 60 seconds with 15s overlap\n• Indexed Timestamp Precision: 100ms", font=f_reg(11), fill=(203, 213, 225, 255))
    
    save_image(base, "public/assets/advanced_video_qa_pro_image/advanced-video-qa-pro-shell.png")

def build_video_qa_02_play():
    base = make_backdrop(1920, 1080, glow_color=(59, 130, 246), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Advanced Video QA Pro — Video Playback & Timestamp Seek", url="desktop://videoqa/player", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
    draw.text((wx + 30, top_y + 16), "Synchronized Video Playback & Audio Transcript Highlighting", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "PyQt6 QMediaPlayer • Sub-second Precision Seeking • Live Word-by-Word Subtitle Telemetry", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Video screen left (1100px)
    vx = wx + 30
    vw = 1100
    vy = top_y + 70
    vh = wy + wh - vy - 30
    draw.rounded_rectangle([vx, vy, vx + vw, vy + vh], radius=10, fill=(8, 12, 20, 255), outline=(36, 50, 75, 255), width=1)
    
    draw.text((vx + 40, vy + 40), "[ACTIVE LECTURE PLAYBACK: 00:42:15] Neural Network Weight Optimization", font=f_mono(14, bold=True), fill=(59, 130, 246, 255))
    
    # Scrubber
    draw.rounded_rectangle([vx + 40, vy + vh - 100, vx + vw - 40, vy + vh - 60], radius=6, fill=(24, 32, 50, 255))
    draw.rectangle([vx + 40, vy + vh - 100, vx + 600, vy + vh - 60], fill=(59, 130, 246, 255))
    draw.ellipse([vx + 590, vy + vh - 106, vx + 614, vy + vh - 54], fill=(255, 255, 255, 255))
    
    # Transcript Right Panel (580px)
    tx = vx + vw + 20
    tw = ww - (vx - wx) - vw - 40
    draw.rounded_rectangle([tx, vy, tx + tw, vy + vh], radius=10, fill=(16, 22, 36, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((tx + 20, vy + 20), "SYNCHRONIZED AUDIO TRANSCRIPT", font=f_bold(11), fill=(96, 165, 250, 255))
    
    lines = [
        ("00:41:50", "...as we discussed in the preliminary convex optimization section..."),
        ("00:42:05", "...the objective function can easily diverge without a penalty term..."),
        ("00:42:15", ">> [ACTIVE] SO WE ADD AN L2 WEIGHT DECAY REGULARIZER LAMBDA * ||W||^2 <<"),
        ("00:42:35", "...which shrinks the weights toward zero and prevents catastrophic overfitting..."),
        ("00:42:50", "...notice how this corresponds to a Gaussian prior over the parameters...")
    ]
    ly = vy + 60
    for ts, txt in lines:
        is_act = "ACTIVE" in txt
        bg = (30, 48, 75, 255) if is_act else (20, 28, 44, 255)
        bdr = (59, 130, 246, 255) if is_act else (32, 44, 66, 255)
        draw.rounded_rectangle([tx + 16, ly, tx + tw - 16, ly + 64], radius=6, fill=bg, outline=bdr, width=1)
        draw.text((tx + 28, ly + 10), ts, font=f_mono(10, bold=True), fill=(96, 165, 250, 255) if is_act else (148, 163, 184, 255))
        draw.text((tx + 28, ly + 28), txt, font=f_reg(11), fill=(255, 255, 255, 255) if is_act else (148, 163, 184, 255))
        ly += 74
        
    save_image(base, "public/assets/advanced_video_qa_pro_image/video-play.png")

def build_video_qa_03_processing():
    base = make_backdrop(1920, 1080, glow_color=(16, 185, 129), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Advanced Video QA Pro — Ingestion Pipeline", url="desktop://videoqa/ingestion", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
    draw.text((wx + 30, top_y + 16), "Asynchronous Video & Audio Ingestion Pipeline", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "FFmpeg Demuxing • Whisper Automatic Speech Recognition • Semantic Vector Embedding", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # 4 Pipeline Stage Cards
    stages = [
        ("STAGE 1: FFMPEG AUDIO EXTRACTION", "COMPLETED", "Extracted 16kHz mono PCM stream from video container in 2.4s.", (16, 185, 129, 255)),
        ("STAGE 2: OPENAI WHISPER TRANSCRIPTION", "COMPLETED", "Generated 4,280 timestamped words with speaker confidence scoring.", (16, 185, 129, 255)),
        ("STAGE 3: TEMPORAL SEMANTIC CHUNKING", "COMPLETED", "Split into 142 discrete chunks preserving 100ms start/end metadata.", (56, 189, 248, 255)),
        ("STAGE 4: FAISS VECTOR STORE INDEXING", "READY", "Generated 1,536-dimensional embeddings and compiled FlatIP index.", (168, 85, 247, 255))
    ]
    sy = top_y + 80
    for s_tit, s_st, s_dsc, col in stages:
        draw.rounded_rectangle([wx + 40, sy, wx + ww - 40, sy + 88], radius=10, fill=(16, 22, 36, 255), outline=(36, 50, 75, 255), width=1)
        draw.text((wx + 64, sy + 18), s_tit, font=f_bold(14), fill=(255, 255, 255, 255))
        draw.text((wx + 64, sy + 44), s_dsc, font=f_reg(12), fill=(148, 163, 184, 255))
        draw_pill(draw, wx + ww - 200, sy + 24, s_st, f_bold(11), bg=(*col[:3], 30), fg=col, border=col)
        sy += 106
        
    save_image(base, "public/assets/advanced_video_qa_pro_image/processing.png")

def build_video_qa_04_provider():
    base = make_backdrop(1920, 1080, glow_color=(6, 182, 212), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Advanced Video QA Pro — Vector Similarity Analysis", url="desktop://videoqa/vectors", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
    draw.text((wx + 30, top_y + 16), "FAISS Top-K Vector Retrieval & Cosine Similarity Analysis", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Evaluates cosine distance across 1,536-dim latent space for grounded query context", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # 3 Ranked Chunk Cards
    chunks = [
        ("RANK #1: CHUNK ID #84", "COSINE SIMILARITY: 0.942", "Timestamp: 00:42:15 - 00:42:48", "Transcript: '...so we add an L2 weight decay regularizer lambda * ||w||^2...'"),
        ("RANK #2: CHUNK ID #85", "COSINE SIMILARITY: 0.918", "Timestamp: 00:43:10 - 00:43:55", "Transcript: '...this penalty forces the gradient update to decay parameters proportionally...'"),
        ("RANK #3: CHUNK ID #42", "COSINE SIMILARITY: 0.884", "Timestamp: 00:21:05 - 00:21:40", "Transcript: '...earlier we defined standard Mean Squared Error without weight constraints...'")
    ]
    cy = top_y + 80
    for r_tit, r_sim, r_ts, r_txt in chunks:
        draw.rounded_rectangle([wx + 40, cy, wx + ww - 40, cy + 120], radius=10, fill=(16, 22, 36, 255), outline=(6, 182, 212, 255) if "RANK #1" in r_tit else (36, 50, 75, 255), width=1)
        draw.text((wx + 64, cy + 18), r_tit, font=f_bold(14), fill=(255, 255, 255, 255))
        draw_pill(draw, wx + 300, cy + 14, r_sim, f_bold(10), bg=(6, 182, 212, 30), fg=(34, 211, 238, 255))
        draw.text((wx + 64, cy + 48), r_ts, font=f_mono(11), fill=(148, 163, 184, 255))
        draw.text((wx + 64, cy + 74), r_txt, font=f_reg(12), fill=(226, 232, 240, 255))
        cy += 140
        
    save_image(base, "public/assets/advanced_video_qa_pro_image/provider-analysis.png")

def build_video_qa_05_proof():
    base = make_backdrop(1920, 1080, glow_color=(168, 85, 247), center=(960, 520), glow_r=750)
    draw = ImageDraw.Draw(base)
    wx, wy, ww, wh = 80, 50, 1760, 980
    top_y = draw_window_frame(draw, wx, wy, ww, wh, title="Advanced Video QA Pro — Grounded Research Q&A", url="desktop://videoqa/chat", dark=True)
    
    draw.rectangle([wx + 1, top_y + 1, wx + ww - 1, wy + wh - 1], fill=(12, 16, 26, 255))
    draw.text((wx + 30, top_y + 16), "Verifiable AI Evidence & Sub-Second Video Navigation", font=f_bold(18), fill=(255, 255, 255, 255))
    draw.text((wx + 30, top_y + 42), "Grounded Citations with Actionable 1-Click Timestamp Seeking", font=f_reg(12), fill=(148, 163, 184, 255))
    
    # Split view: Video Player on left (1000px) + Grounded Chat on right (680px)
    vx = wx + 30
    vw = 1000
    vy = top_y + 70
    vh = wy + wh - vy - 30
    draw.rounded_rectangle([vx, vy, vx + vw, vy + vh], radius=10, fill=(8, 12, 20, 255), outline=(36, 50, 75, 255), width=1)
    
    # Screen
    draw.rectangle([vx + 20, vy + 20, vx + vw - 20, vy + vh - 120], fill=(16, 22, 36, 255))
    draw.text((vx + 40, vy + 36), "[SEEK TARGET LOCKED: 00:42:15] Verified Video Citation Playback", font=f_mono(13, bold=True), fill=(52, 211, 153, 255))
    
    # Render presentation slide in player
    sx, sy, sw, sh = vx + 40, vy + 70, vw - 80, vh - 210
    draw.rounded_rectangle([sx, sy, sx + sw, sy + sh], radius=8, fill=(248, 250, 252, 255), outline=(220, 228, 240, 255), width=1)
    draw.text((sx + 36, sy + 24), "Lecture 4: Loss Functions & Parameter Regularization", font=f_bold(18), fill=(15, 23, 42, 255))
    draw.line([sx + 36, sy + 54, sx + sw - 36, sy + 54], fill=(226, 232, 240, 255), width=1)
    draw.text((sx + 36, sy + 70), "L2 Regularization (Weight Decay Objective):", font=f_bold(13), fill=(15, 23, 42, 255))
    draw.text((sx + 36, sy + 98), "min_w  (1 / 2m) * SUM (h_w(x^(i)) - y^(i))^2  +  (lambda / 2) * ||w||^2", font=f_mono(13, bold=True), fill=(79, 70, 229, 255))
    draw.text((sx + 36, sy + 138), "Key Mathematical Properties:\n• Gradient update: w := w * (1 - alpha * lambda / m) - (alpha / m) * grad_cost\n• Exponentially contracts non-informative feature weights toward zero\n• Prevents high-variance overfitting on high-dimensional sparse inputs", font=f_reg(11), fill=(51, 65, 85, 255))
    
    # Scrubber
    draw.rounded_rectangle([vx + 20, vy + vh - 90, vx + vw - 20, vy + vh - 50], radius=6, fill=(24, 32, 50, 255))
    draw.rectangle([vx + 20, vy + vh - 90, vx + 480, vy + vh - 50], fill=(168, 85, 247, 255))
    
    # Right Grounded Chat
    cx = vx + vw + 20
    cw = ww - (vx - wx) - vw - 40
    draw.rounded_rectangle([cx, vy, cx + cw, vy + vh], radius=10, fill=(16, 22, 36, 255), outline=(36, 50, 75, 255), width=1)
    draw.text((cx + 20, vy + 20), "GROUNDED RESEARCH CONVERSATION", font=f_bold(11), fill=(192, 132, 252, 255))
    
    # User message
    draw.rounded_rectangle([cx + 20, vy + 50, cx + cw - 20, vy + 120], radius=8, fill=(24, 34, 52, 255), outline=(40, 56, 82, 255), width=1)
    draw.text((cx + 34, vy + 62), "RESEARCHER:", font=f_bold(10), fill=(148, 163, 184, 255))
    draw.text((cx + 34, vy + 82), '"How is the loss function regularized in Lecture 4?"', font=f_reg(12), fill=(255, 255, 255, 255))
    
    # Assistant Grounded Answer
    ay = vy + 136
    draw.rounded_rectangle([cx + 20, ay, cx + cw - 20, ay + 380], radius=8, fill=(20, 28, 46, 255), outline=(168, 85, 247, 255), width=1)
    draw.text((cx + 34, ay + 14), "GROUNDED AI RESPONSE (Confidence: 99.4%):", font=f_bold(10), fill=(192, 132, 252, 255))
    
    ans = (
        "The professor explains that an L2 penalty term is appended to the\n"
        "mean squared error cost function:\n\n"
        "J_regularized(w) = J(w) + (lambda / 2) * ||w||^2\n\n"
        "This shrinks excessive weight magnitudes during gradient descent,\n"
        "effectively preventing the network from overfitting noisy training data.\n\n"
        "VERIFIED VIDEO CITATIONS (Click to seek):\n"
        "• Citation [1]: 00:42:15 - 00:42:48 (Similarity: 0.942) [JUMP]\n"
        "• Citation [2]: 00:43:10 - 00:43:55 (Similarity: 0.918) [JUMP]\n"
        "• Transcript snippet verified via FAISS Vector Database."
    )
    draw.text((cx + 34, ay + 42), ans, font=f_reg(11), fill=(226, 232, 240, 255))
    
    save_image(base, "public/assets/advanced_video_qa_pro_image/chat-proof.png")

if __name__ == "__main__":
    print("Generating rich Image Toolkit Pro screens...")
    build_itp_01_workspace()
    build_itp_02_drawing()
    build_itp_03_detection()
    build_itp_04_webcam()
    build_itp_05_batch()
    build_itp_06_preferences()
    
    print("Generating rich Advanced Video QA screens...")
    build_video_qa_01_shell()
    build_video_qa_02_play()
    build_video_qa_03_processing()
    build_video_qa_04_provider()
    build_video_qa_05_proof()
    print("Rich CV and Video QA Assets Generated Successfully!")
