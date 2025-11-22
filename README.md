# RC25 Industry Visit Guide Website - December 2025

A modern, responsive event management website for the **65-participant industry visit to Chennai (8th-10th December 2025)**. Features include dynamic schedule timeline, comprehensive search functionality, interactive FAQs with chatbot integration, location guides, detailed instructions, and dark/light theme toggle. Built with clean UI/UX principles for optimal student guidance and event management.

## 🎯 **Visit Overview**
- **Dates**: December 8-10, 2025
- **Participants**: 65 students
- **Destinations**: Integral Coach Factory (ICF) & Rail Museum Chennai
- **Accommodation**: Royal Paris Hotel (3-4 people sharing)
- **Transport**: 
  - **Outbound**: Train 12658 - SBC MAS SF MAIL (Departs KSR Bengaluru 22:40)
  - **Return**: Train 22625 - SBC DBLDECK EXP (Departs MGR Chennai Central 07:25)
- **Cultural Visit**: Matsya Narayana Temple

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Enhanced Navigation**: RVCE and SPARK logos with optimized layout
- **Advanced Search**: Comprehensive search functionality across all pages
- **AI Chatbot**: Interactive assistant for instant help
- **Comprehensive Pages**:
  - **Home**: Visit overview, 3-day journey highlights, and quick actions
  - **Schedule**: Detailed timeline with exact timings and locations
  - **Instructions**: Dress code guidelines, accommodation details, and safety protocols
  - **Questions**: FAQ with updated contact information and AI chat support
  - **Arrival & Departure**: Transportation guides and station information

## 🔍 **Enhanced Search Functionality**
- **Real-time search** across all website content
- **Keyword matching** for schedules, contacts, locations, and instructions
- **Categorized results** with direct navigation to relevant pages
- **Keyboard navigation** support (arrow keys, enter, escape)
- **Updated search database** with current visit details and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: Custom theme provider with dark/light mode
- **Search**: Custom search modal with comprehensive content indexing
- **Logos**: RVCE and SPARK branding integration

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
│   ├── Navigation.tsx     # Main navigation with RVCE & SPARK logos
│   ├── SearchModal.tsx    # Advanced search functionality
│   ├── ThemeProvider.tsx  # Theme context provider
│   └── ...other components
├── public/               # Static assets
│   ├── RVCE_White.png    # RVCE logo (dark theme)
│   ├── RVCE_BLACK.png    # RVCE logo (light theme)
│   ├── spark.svg         # SPARK logo
│   └── ...other assets
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

## 📋 **Recent Updates & Features**

### **Navigation & Branding**
- ✅ **RVCE Logo Integration**: Prominent RVCE logo with theme-aware display
- ✅ **SPARK Logo Addition**: SPARK logo alongside RVCE branding
- ✅ **Optimized Layout**: Left-aligned navigation with minimal padding
- ✅ **Logo Size Optimization**: RVCE logo 25% larger, SPARK logo appropriately sized

### **Content Updates**
- ✅ **December 2025 Schedule**: Complete 3-day itinerary with exact timings
- ✅ **Updated Contact Information**: New coordinators and email addresses
- ✅ **Hotel Information**: Royal Paris Hotel accommodation details
- ✅ **Train Details**: 
  - Outbound: 12658 - SBC MAS SF MAIL (22:40 from KSR Bengaluru)
  - Return: 22625 - SBC DBLDECK EXP (07:25 from MGR Chennai Central)
- ✅ **Dress Code Guidelines**: Updated requirements for boys and girls
- ✅ **Advisory Section**: Minimal luggage requirements and safety protocols

### **Technical Improvements**
- ✅ **Enhanced Search**: Comprehensive search across all pages and content
- ✅ **Removed Unused Elements**: Cleaned up download buttons and unnecessary sections
- ✅ **Build Optimization**: Fixed compilation errors and improved performance
- ✅ **Responsive Design**: Optimized for all device sizes

## 📞 **Contact Information**

### **Program Coordinators**
- **Rupini Hulikatti**: +91 99014 15295
- **Tejas S Math**: +91 93531 49945
- **Email**: spark.iucee@rvce.edu.in
- **Emergency Contact**: +91 99014 15295

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

For technical support and development questions:
- **Developer**: Kavin Krishnan. C
- **Email**: kavinkrishnanc@gmail.com
- **Phone**: +91 95133 44481

For program-related inquiries, please contact the program coordinators listed above.
