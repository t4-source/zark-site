# 🤖 Chatbot Setup Guide

## Tawk.to Chatbot Integration

Your website now has a chatbot integration ready! Here's how to set it up:

### Step 1: Create Tawk.to Account
1. Go to [tawk.to](https://www.tawk.to)
2. Sign up for a free account
3. Create a new property for your website

### Step 2: Get Your Widget ID
1. In your Tawk.to dashboard, go to "Administration" → "Channels" → "Chat Widget"
2. Copy your **Widget ID** (it looks like: `64f8a1234567890abcdef123`)
3. Replace `YOUR_TAWK_ID` in the code with your actual Widget ID

### Step 3: Update the Code
In `src/app/layout.tsx`, find this line:
```javascript
s1.src = 'https://embed.tawk.to/YOUR_TAWK_ID/default';
```

Replace `YOUR_TAWK_ID` with your actual Widget ID:
```javascript
s1.src = 'https://embed.tawk.to/64f8a1234567890abcdef123/default';
```

### Step 4: Customize Your Chatbot
In your Tawk.to dashboard, you can:
- ✅ Set welcome messages
- ✅ Configure business hours
- ✅ Add auto-responses
- ✅ Customize appearance
- ✅ Set up email notifications

### Step 5: Deploy
After updating the Widget ID, rebuild and deploy your site:
```bash
npm run build
```

## 🎨 Customization Options

### Appearance
- Change colors to match your brand
- Add your company logo
- Customize chat bubble position

### Behavior
- Set operating hours
- Add auto-responses for common questions
- Configure email notifications
- Set up offline messages

### Advanced Features
- Integration with CRM systems
- Multi-language support
- File sharing capabilities
- Screen sharing for support

## 📱 Mobile Responsive
The chatbot automatically adapts to mobile devices and will appear as a floating chat bubble on all pages.

## 🔧 Alternative Chatbot Options

If you prefer other options:

### 1. Intercom (Professional)
- More features but paid
- Better analytics
- Advanced automation

### 2. Custom React Chatbot
- Full control over design
- More development work
- Completely branded

### 3. WhatsApp Business API
- Direct WhatsApp integration
- Popular in India
- Requires WhatsApp Business account

## ✅ Benefits of Tawk.to
- ✅ Completely free
- ✅ Easy setup (5 minutes)
- ✅ Mobile responsive
- ✅ Multi-language support
- ✅ File sharing
- ✅ Screen sharing
- ✅ Email notifications
- ✅ Analytics dashboard

Your chatbot will be live on all pages once you update the Widget ID and deploy!
