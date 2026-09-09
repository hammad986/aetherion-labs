"""
Aetherion Labs Showcase Asset Generator
Builds 1920x1080 (and 1200x630) high-fidelity, production-grade product showcases.
"""

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT_REG_PATH = "C:/Windows/Fonts/segoeui.ttf"
FONT_BOLD_PATH = "C:/Windows/Fonts/segoeuib.ttf"
FONT_MONO_PATH = "C:/Windows/Fonts/consola.ttf"
FONT_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"

def f_reg(sz):
    try: return ImageFont.truetype(FONT_REG_PATH, sz)
    except: return ImageFont.load_default()

def f_bold(sz):
    try: return ImageFont.truetype(FONT_BOLD_PATH, sz)
    except: return ImageFont.load_default()

def f_mono(sz, bold=False):
    try: return ImageFont.truetype(FONT_MONO_BOLD if bold else FONT_MONO_PATH, sz)
    except: return ImageFont.load_default()

def make_backdrop(w=1920, h=1080, glow_color=(6, 182, 212), center=(960, 540), glow_r=720, bg_base=(7, 11, 20)):
    img = Image.new("RGBA", (w, h), (*bg_base, 255))
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = center
    for r in range(glow_r, 0, -25):
        ratio = r / glow_r
        alpha = int((1.0 - ratio) ** 1.9 * 80)
        gd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*glow_color, alpha))
    img = Image.alpha_composite(img, glow)
    
    dots = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    dd = ImageDraw.Draw(dots)
    for x in range(20, w, 40):
        for y in range(20, h, 40):
            d = ((x - cx)**2 + (y - cy)**2)**0.5
            if d < 950:
                a = int((1.0 - (d / 950)) * 26)
                dd.rectangle([x, y, x + 1, y + 1], fill=(255, 255, 255, a))
    return Image.alpha_composite(img, dots)

def draw_window_frame(draw, x, y, w, h, title="Aetherion Labs", url="https://app.aetherionlabs.com", dark=True):
    bar_h = 46
    border = (45, 55, 78, 255) if dark else (218, 225, 235, 255)
    bg_bar = (16, 22, 36, 255) if dark else (243, 246, 251, 255)
    bg_body = (10, 14, 25, 255) if dark else (255, 255, 255, 255)
    
    # Outer frame
    draw.rounded_rectangle([x, y, x + w, y + h], radius=16, fill=bg_body, outline=border, width=1)
    draw.rounded_rectangle([x, y, x + w, y + bar_h + 12], radius=16, fill=bg_bar, outline=border, width=1)
    draw.rectangle([x, y + bar_h - 4, x + w, y + bar_h], fill=bg_bar)
    draw.line([x, y + bar_h, x + w, y + bar_h], fill=border, width=1)
    
    # Traffic dots
    draw.ellipse([x + 20, y + 17, x + 30, y + 27], fill=(255, 95, 86, 255))
    draw.ellipse([x + 38, y + 17, x + 48, y + 27], fill=(255, 189, 46, 255))
    draw.ellipse([x + 56, y + 17, x + 66, y + 27], fill=(39, 201, 63, 255))
    
    # URL bar
    url_w = 480
    url_x = x + (w - url_w) // 2
    url_bg = (9, 13, 22, 255) if dark else (233, 238, 246, 255)
    url_bdr = (32, 44, 66, 255) if dark else (208, 216, 228, 255)
    draw.rounded_rectangle([url_x, y + 10, url_x + url_w, y + 36], radius=7, fill=url_bg, outline=url_bdr, width=1)
    
    # SSL lock indicator
    draw.rounded_rectangle([url_x + 12, y + 18, url_x + 18, y + 27], radius=2, fill=(16, 185, 129, 255))
    draw.text((url_x + 28, y + 14), url, font=f_reg(12), fill=(148, 163, 184, 255) if dark else (100, 116, 139, 255))
    
    # Title badge
    draw.text((x + w - 180, y + 15), title, font=f_bold(11), fill=(100, 116, 139, 255) if dark else (135, 145, 160, 255))
    return y + bar_h

def draw_pill(draw, x, y, text, font, bg, fg, border=None):
    bb = draw.textbbox((0, 0), text, font=font)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    pw, ph = tw + 18, th + 8
    draw.rounded_rectangle([x, y, x + pw, y + ph], radius=ph//2, fill=bg, outline=border, width=1 if border else 0)
    draw.text((x + 9, y + 3), text, font=font, fill=fg)
    return pw, ph

def save_image(img, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    # Convert RGBA to RGB for saving PNG without alpha if needed, or save PNG with full RGBA
    img.save(path, "PNG", optimize=True)
    sz_kb = os.path.getsize(path) / 1024
    print(f"Saved: {path} ({sz_kb:.1f} KB)")

print("Base setup ready.")
