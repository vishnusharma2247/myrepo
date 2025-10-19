# CredPath - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start the Development Server
```bash
npm run dev
```

### Step 2: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

### Step 3: Start Exploring!
- 🏠 Visit the **Home** page to see the full platform
- 📚 Check out **Courses** to see the certification paths
- 👥 Explore **Mentorship** to see the expert mentors
- 📖 Visit **How It Works** for the process overview
- ℹ️ Read **About** for company info
- 📝 Try the **Contact** form

---

## 🎨 Features to Try

### Dark Mode 🌙
- Click the **sun/moon icon** in the top-right navbar to toggle dark mode
- Your preference is saved automatically

### Interactive Elements
- **Hover over cards** to see smooth animations
- **Click on course cards** to explore detailed curriculum
- **Filter courses** by category on the courses page
- **Submit the contact form** to see validation feedback

### Responsive Design
- Resize your browser window
- Test on mobile device (use Chrome DevTools)
- All layouts adapt beautifully

---

## 📁 Key Files to Explore

### Pages
- `app/page.tsx` - Home page (main landing)
- `app/courses/page.tsx` - Course catalog
- `app/courses/[id]/page.tsx` - Dynamic course details
- `app/mentorship/page.tsx` - Mentor network
- `app/about/page.tsx` - Company info
- `app/contact/page.tsx` - Contact form

### Components
- `components/Navbar.tsx` - Navigation header
- `components/Hero.tsx` - Main hero section
- `components/CoursesSection.tsx` - Course grid with filters
- `components/MentorshipSection.tsx` - Mentor profiles
- `components/Testimonials.tsx` - Success stories

### Styling
- `app/globals.css` - Global styles and animations
- `tailwind.config.ts` - Tailwind configuration

---

## 🎯 Customization Quick Tips

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: {
    500: '#your-color', // Change primary blue
    600: '#darker-shade',
  },
  secondary: {
    500: '#your-color', // Change secondary purple
  }
}
```

### Update Course Data
Edit `components/CourseDetail.tsx` and `components/CoursesSection.tsx`:
- Modify course titles, descriptions, duration
- Add/remove courses
- Update curriculum content

### Modify Mentor Information
Edit `components/MentorshipSection.tsx`:
- Update mentor names and expertise
- Change experience levels
- Add more mentors

### Update Text Content
All text is hardcoded in components for easy editing:
- Find any text string
- Update directly in the component
- Changes appear immediately

---

## 🔧 Build Commands

### Development
```bash
npm run dev
# Runs on http://localhost:3000
# Hot reload on file changes
```

### Production Build
```bash
npm run build
npm start
# Optimized production bundle
```

### Linting
```bash
npm run lint
# Check for code issues
```

---

## 📱 Testing Different Screen Sizes

### Chrome DevTools
1. Open DevTools: `F12` or `Cmd+Option+I`
2. Click Device Toggle Toolbar (top-left corner)
3. Test different devices:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

### Manual Testing
- Resize browser window
- Check mobile view at different orientations
- Test touch interactions on device

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### TailwindCSS
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Class Reference](https://tailwindcss.com/docs/preflight)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Cookbook](https://www.framer.com/motion/animate-presence/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📞 Support

### For Questions
- Check the README.md for detailed documentation
- Review PROJECT_SUMMARY.md for architecture details
- Look at component source code for implementation details

### Common Issues

**"Module not found" error?**
- Ensure path aliases are correct in `tsconfig.json`
- Check import statements use `@/` prefix

**Styles not applying?**
- Clear browser cache
- Rebuild with `npm run build`
- Check class names in `globals.css`

**Dark mode not working?**
- Clear localStorage: `localStorage.clear()`
- Refresh the page
- Check theme provider in `layout.tsx`

---

## 🎉 What's Next?

### Immediate Actions
1. ✅ Run `npm run dev`
2. ✅ Explore all pages
3. ✅ Test responsive design
4. ✅ Try dark mode toggle

### Short-term Enhancements
- Add authentication (NextAuth.js)
- Connect to a backend API
- Add database (Prisma + PostgreSQL)
- Implement email sending

### Long-term Vision
- Complete learning dashboard
- Live mentorship chat
- Video course content
- Certificate generation
- Payment integration

---

## 📊 Project Stats

- **Total Components**: 9
- **Total Pages**: 7
- **Courses**: 6
- **Mentors**: 6
- **Testimonials**: 6
- **Build Size**: ~148 KB
- **Performance**: ⚡ Optimized

---

**Happy coding! 🚀**

*Your CredPath EdTech platform is ready to accelerate engineering careers.*
