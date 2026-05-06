# Disclaimer Modal Behavior

## 🎯 **New Behavior: Once Per Session**

The disclaimer modal now appears **only once per browser session** instead of on every homepage visit.

### **📋 How It Works:**

1. **First Visit to Homepage**: Modal appears
2. **User Clicks "I agree and proceed"**: Modal closes and session flag is set
3. **Subsequent Visits**: Modal does NOT appear again in the same session
4. **New Browser Session**: Modal will appear again (fresh session)

### **🔧 Technical Implementation:**

```tsx
// Check if user has already seen disclaimer in this session
const hasSeenDisclaimer = sessionStorage.getItem('disclaimerAccepted');
if (!hasSeenDisclaimer) {
  setOpen(true); // Show modal
}

// When user accepts, store the flag
function accept() {
  sessionStorage.setItem('disclaimerAccepted', 'true');
  setOpen(false);
}
```

### **✅ Benefits:**

- **Less Irritating**: Only shows once per session
- **User-Friendly**: No repeated interruptions
- **Compliant**: Still shows the required ICAI disclaimer
- **Session-Based**: Resets when browser session ends

### **🔄 Session Behavior:**

| Action | Modal Behavior |
|--------|----------------|
| First homepage visit | ✅ Shows |
| Click "I agree" | ❌ Hides + Sets flag |
| Navigate away & back | ❌ Doesn't show (flag set) |
| Refresh homepage | ❌ Doesn't show (flag set) |
| New browser session | ✅ Shows again |

### **📱 Cross-Tab Behavior:**

- **Same Session**: Modal won't show in other tabs
- **New Tab**: Modal won't show if already accepted in current session
- **Incognito/Private**: Modal will show (separate session)

---

**Result**: Much less irritating user experience while maintaining ICAI compliance! 🎉
