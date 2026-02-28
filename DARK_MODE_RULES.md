# 🎨 FUSIONKODE DARK MODE DESIGN SYSTEM

## 🔒 MASTER RULE - DARK MODE

**ENTIRE WEBSITE DARK MODE BACKGROUND:**
```css
Background Color: #0a0e17 (Charcoal Matte with Glow)
```

---

## 📐 DARK MODE SPECIFICATIONS

### **Background**
- **Base Color**: `#0a0e17` (Deep charcoal matte)
- **Effect**: Subtle radial glow for depth
- **Gradient**: `radial-gradient(circle at 50% 40%, rgba(20, 30, 48, 0.4) 0%, #0a0e17 65%)`

### **Why This Color?**
- ✅ Professional and premium
- ✅ Easy on eyes for long sessions
- ✅ Better than pure black (#000000)
- ✅ Matte finish with subtle depth
- ✅ Glowing effect adds dimension

---

## 🎯 IMPLEMENTATION GUIDE

### **For Every New Section:**

```css
/* Light Mode */
.your-section {
  background: #F5F7FA; /* Light gray */
}

/* Dark Mode - ALWAYS USE THIS */
.dark .your-section {
  background: #0a0e17; /* Charcoal matte */
}
```

### **With Glow Effect (Optional):**

```css
.your-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 40%, 
    rgba(20, 30, 48, 0.4) 0%, 
    #0a0e17 65%
  );
  z-index: 0;
}
```

---

## ✅ CURRENT SECTIONS

### **1. Hero Section**
- Light: `#F5F7FA` with subtle white radial
- Dark: `#0a0e17` with subtle glow ✅

### **2. About Section**
- Light: `#F5F7FA` 
- Dark: `#0a0e17` ✅

### **3. Future Sections**
- ALL must use `#0a0e17` in dark mode ✅

---

## 🚫 DO NOT USE IN DARK MODE

❌ Pure black `#000000`
❌ Dark navy `#050A18`  
❌ Dark blue tints
❌ Any other dark colors

✅ **ONLY USE: #0a0e17 (Charcoal Matte)**

---

## 🎨 TEXT COLORS (Dark Mode)

### **Headings**
```css
color: #FFFFFF; /* Pure white for maximum contrast */
```

### **Body Text**
```css
color: rgba(255, 255, 255, 0.75); /* 75% white for readability */
```

### **Labels / Secondary**
```css
color: rgba(255, 255, 255, 0.6); /* 60% white for subdued text */
```

### **Accent**
```css
color: #FF4D4F; /* Brand red */
```

---

## 🔧 QUICK REFERENCE

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Body Background** | `#F5F7FA` | `#0a0e17` |
| **Section Background** | `#F5F7FA` | `#0a0e17` |
| **Card Background** | `#FFFFFF` | `#141824` |
| **Text Primary** | `#0F172A` | `#FFFFFF` |
| **Text Secondary** | `rgba(15,23,42,0.75)` | `rgba(255,255,255,0.75)` |
| **Accent** | `#FF4D4D` | `#FF4D4F` |

---

## 💡 BEST PRACTICES

1. **Always test both modes** when adding new sections
2. **Use charcoal matte** (`#0a0e17`) for all dark backgrounds
3. **Add subtle glow** for premium feel
4. **Maintain proper contrast** for accessibility
5. **Keep text readable** with proper opacity

---

## 🎯 IMPLEMENTATION CHECKLIST

When adding a new section:

- [ ] Light mode background: `#F5F7FA`
- [ ] Dark mode background: `#0a0e17`
- [ ] Text colors adjusted for both modes
- [ ] Proper contrast maintained
- [ ] Optional: Subtle glow effect added
- [ ] Tested in both light and dark mode

---

**Last Updated:** 2026-02-13
**Status:** ✅ Active Design System
**Owner:** FusionKode Team
