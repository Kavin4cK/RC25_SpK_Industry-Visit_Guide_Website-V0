# RC25 Industry Visit Guide Website

A modern, responsive event management website for industrial visit coordination. Features include dynamic schedule timeline, interactive FAQs with chatbot integration, location guides with embedded maps, comprehensive instructions section, and dark/light theme toggle. Built with clean UI/UX principles for optimal student guidance and event management.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Interactive Navigation**: Smooth navigation with active state indicators
- **Search Functionality**: Built-in search for FAQs and content
- **AI Chatbot**: Interactive assistant for instant help
- **Comprehensive Pages**:
  - Home: Overview and quick actions
  - Schedule: Detailed timeline with event information
  - Instructions: Pre-visit checklist and guidelines
  - Questions: FAQ and AI chat support
  - Arrival & Departure: Transportation and location guides

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: Custom theme provider with dark/light mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RC25_SpK_Industry-Visit_Guide_Website-V0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── schedule/          # Schedule page
│   ├── instructions/      # Instructions page
│   ├── questions/         # Questions & FAQ page
│   └── arrival-departure/ # Transportation guide page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation component
│   └── ThemeProvider.tsx  # Theme context provider
├── public/               # Static assets
└── ...config files
```

## 🎨 Customization

### Colors
The project uses a custom color scheme defined in `tailwind.config.js`:
- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Various colors for different content types

### Theme
The theme system supports:
- Light mode (default)
- Dark mode
- System preference detection
- Smooth transitions between themes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- **Program Coordinator**: Dr. Sarah Johnson
- **Email**: sarah.johnson@university.edu
- **Phone**: +1 (555) 123-4567
- **Emergency**: +1 (555) 987-6543
