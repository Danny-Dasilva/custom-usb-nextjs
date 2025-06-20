import { BlogPost, BlogCategory, BlogTag } from "@/types/blog";

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Generate excerpt from content
function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Can't Miss Cyber Monday Sites for Tech-Lovers",
    slug: "5-cant-miss-cyber-monday-sites-for-tech-lovers",
    publishedAt: "2013-10-25T12:56:40+00:00",
    modifiedAt: "2015-11-06T14:44:24+00:00",
    description: "If you're waiting until Black Friday or Cyber Monday to get the best deals on laptops, tablets, iPads, and other electronics – good! Because this year's sales are expected to be well worth the wait...",
    content: `<p>If you're waiting until Black Friday or Cyber Monday to get the best deals on laptops, tablets, iPads, and other electronics – good! Because this year's sales are expected to be well worth the wait.</p>

<p>In fact, according to the National Retail Foundation, Cyber Monday 2013 could beat out Black Friday 2013 for the biggest shopping day of the year. And why not? Shopping online is so much more convenient than fighting crowds and waiting in long lines.</p>

<p>To help you make the most of your Cyber Monday shopping, we've compiled a list of the top 5 websites to watch for the best tech deals:</p>

<h3>1. NewEgg</h3>
<p>NewEgg is a tech lover's paradise. They specialize in computer hardware, software, and electronics. On Cyber Monday, expect deep discounts on everything from gaming laptops to graphics cards.</p>

<h3>2. Amazon</h3>
<p>Amazon's Cyber Monday deals are legendary. They offer lightning deals that change throughout the day, so check back frequently. Their electronics section is particularly strong.</p>

<h3>3. NerdWallet</h3>
<p>NerdWallet isn't a retailer, but they aggregate the best deals from across the web. It's a great place to comparison shop and find coupon codes.</p>

<h3>4. Frys.com</h3>
<p>Fry's Electronics offers competitive prices on computers, gaming systems, and consumer electronics. Their Cyber Monday deals often include free shipping.</p>

<h3>5. MicroCenter</h3>
<p>MicroCenter is perfect for DIY computer builders. They offer great deals on processors, motherboards, and other components.</p>

<p>Start making your wishlist now, and happy shopping!</p>`,
    featuredImage: "/images/categories/all.jpg",
    author: "Custom USB Source",
    categories: ["Deals & Specials"],
    tags: ["Cyber Monday"],
    readingTime: calculateReadingTime("If you're waiting until Black Friday or Cyber Monday to get the best deals on laptops, tablets, iPads, and other electronics – good! Because this year's sales are expected to be well worth the wait..."),
    excerpt: generateExcerpt("If you're waiting until Black Friday or Cyber Monday to get the best deals on laptops, tablets, iPads, and other electronics – good! Because this year's sales are expected to be well worth the wait...")
  },
  {
    id: "2",
    title: "5 Ways To Squeeze More Life From Your Old USB Drive",
    slug: "5-ways-to-squeeze-more-life-from-your-old-usb-drive",
    publishedAt: "2013-11-02T12:59:20+00:00",
    modifiedAt: "2015-11-06T14:44:24+00:00",
    description: "If your drawer is spilling over with old, outdated USB drives, you should know two things: 1. You're a hoarder, and there's help out there just for you. 2. Those USB drives are still useful!",
    content: `<p>If your drawer is spilling over with old, outdated USB drives, you should know two things:</p>
<ol>
<li>You're a hoarder, and there's help out there just for you.</li>
<li>Those USB drives are still useful!</li>
</ol>

<p>Before you throw them away or stash them in another drawer, consider these creative ways to give your old USB drives new life:</p>

<h3>1. Backup Operating System Storage</h3>
<p>Create a portable version of your operating system on a USB drive. This can be a lifesaver if your computer crashes or you need to work on a different machine. Linux distributions like Ubuntu offer easy-to-create live USB options.</p>

<h3>2. Portable Apps</h3>
<p>Load your USB drive with portable versions of your favorite applications. Tools like PortableApps.com offer hundreds of programs that run directly from your USB drive without installation.</p>

<h3>3. Computer Security Key</h3>
<p>Turn your USB drive into a security key for your computer. Some software allows you to use a USB drive as a hardware key – your computer won't boot without it plugged in.</p>

<h3>4. Troubleshooting Toolkit</h3>
<p>Create a USB toolkit loaded with antivirus software, system diagnostic tools, and recovery utilities. This can be invaluable when helping friends and family with computer problems.</p>

<h3>5. Game System Emulators</h3>
<p>Load retro gaming emulators and ROMs onto your USB drive for portable nostalgia. Play classic games from systems like NES, SNES, and Genesis on any computer.</p>

<p>Don't let those old USB drives go to waste – with a little creativity, they can still serve useful purposes!</p>`,
    featuredImage: "/images/categories/plastic.jpg",
    author: "Custom USB Source",
    categories: ["Custom USB Drives", "Tutorials"],
    tags: ["Uses for USB Drives"],
    readingTime: calculateReadingTime("If your drawer is spilling over with old, outdated USB drives, you should know two things..."),
    excerpt: generateExcerpt("If your drawer is spilling over with old, outdated USB drives, you should know two things: 1. You're a hoarder, and there's help out there just for you. 2. Those USB drives are still useful!")
  },
  {
    id: "3",
    title: "Flash Drive Lingo: What's the Difference Between Flash Drives?",
    slug: "flash-drive-lingo-whats-the-difference-between-flash-drives",
    publishedAt: "2013-12-12T00:11:27+00:00",
    modifiedAt: "2015-11-06T14:44:24+00:00",
    description: "You say potato, I say po-tah-toe might be true for root vegetables, but in the world of drives, little differences can be significant...",
    content: `<p>You say potato, I say po-tah-toe might be true for root vegetables, but in the world of drives, little differences can be significant.</p>

<p>When shopping for flash storage, you'll encounter various terms that might seem interchangeable but actually have distinct meanings. Let's break down the flash drive lingo:</p>

<h3>Flash Drive vs. USB Flash Drive</h3>
<p>All USB flash drives are flash drives, but not all flash drives are USB drives. "Flash drive" refers to any storage device that uses flash memory, while "USB flash drive" specifically refers to flash storage that connects via USB port.</p>

<h3>Flash Memory Cards</h3>
<p>These include SD cards, microSD cards, and CompactFlash cards. They use the same flash memory technology but have different form factors and connection methods.</p>

<h3>Understanding the Technical Terms</h3>

<h4>Mbps vs. MB/GB</h4>
<p><strong>Mbps</strong> (megabits per second) measures data transfer speed, while <strong>MB</strong> (megabytes) and <strong>GB</strong> (gigabytes) measure storage capacity. Don't confuse the two!</p>

<h4>USB Standards</h4>
<ul>
<li><strong>USB 2.0</strong>: Transfer speeds up to 480 Mbps</li>
<li><strong>USB 3.0</strong>: Transfer speeds up to 5 Gbps (10x faster than USB 2.0)</li>
<li><strong>USB 3.1</strong>: Transfer speeds up to 10 Gbps</li>
</ul>

<h4>Encryption</h4>
<p>Some flash drives offer hardware or software encryption to protect your data. Look for AES 256-bit encryption for maximum security.</p>

<h4>Autorun Features</h4>
<p>Some drives can automatically launch programs or files when connected to a computer. This feature can be useful for presentations or software distribution.</p>

<p>Understanding these terms will help you make informed decisions when purchasing flash storage for your needs.</p>`,
    featuredImage: "/images/categories/metal.jpg",
    author: "Custom USB Source",
    categories: ["Custom USB Drives"],
    tags: ["USB Tutorials", "Uses for USB Drives"],
    readingTime: calculateReadingTime("You say potato, I say po-tah-toe might be true for root vegetables, but in the world of drives, little differences can be significant..."),
    excerpt: generateExcerpt("You say potato, I say po-tah-toe might be true for root vegetables, but in the world of drives, little differences can be significant...")
  },
  {
    id: "4",
    title: "Best Black Friday Deals of 2013",
    slug: "best-black-friday-deals-of-2013",
    publishedAt: "2013-10-23T12:55:16+00:00",
    description: "Looking for a new HDTV? Ready to invest in that new computer? Well, if you can wait until Black Friday 2013, you'll be in luck – because this Black Friday looks like it will be a good one.",
    content: `<p>Looking for a new HDTV? Ready to invest in that new computer? Well, if you can wait until Black Friday 2013, you'll be in luck – because this Black Friday looks like it will be a good one.</p>

<p>This year, dedicated deal hunters will have to take some time out from turkey and football to find the best prices – because this year, the deals are starting early: on Thanksgiving day.</p>

<h3>Cyber Deals Week</h3>
<p>This year introduces "Cyber Deals Week" – an extended period of online deals that bridges Black Friday and Cyber Monday, giving shoppers more opportunities to save.</p>

<h3>Top Categories to Watch</h3>

<h4>HDTVs</h4>
<p>Expect significant discounts on large-screen TVs from major brands. Look for doorbuster deals on 50"+ models with savings of $200-500.</p>

<h4>Laptops and Computers</h4>
<p>Both Windows and Mac computers will see substantial discounts. Gaming laptops and ultrabooks are expected to have the deepest cuts.</p>

<h4>Tablets & E-Readers</h4>
<p>Tablets will be heavily discounted, especially older iPad models and Android tablets. E-readers like Kindle will likely hit their lowest prices of the year.</p>

<h4>Gadgets with Phone-like Functions</h4>
<p>Smartphones, smartwatches, and other connected devices will see competitive pricing as retailers compete for holiday shoppers.</p>

<p>Start planning your shopping strategy now – create lists, compare regular prices, and sign up for retailer alerts to ensure you don't miss the best deals!</p>`,
    featuredImage: "/images/categories/wood.jpg",
    author: "Custom USB Source",
    categories: ["Deals & Specials"],
    tags: ["Black Friday", "Cyber Deals Week", "E-Readers", "HDTVs", "Laptops", "Phones", "Tablets"],
    readingTime: calculateReadingTime("Looking for a new HDTV? Ready to invest in that new computer..."),
    excerpt: generateExcerpt("Looking for a new HDTV? Ready to invest in that new computer? Well, if you can wait until Black Friday 2013, you'll be in luck – because this Black Friday looks like it will be a good one.")
  },
  {
    id: "5",
    title: "Gadgets To Help Keep New Year's Resolutions",
    slug: "gadgets-to-help-keep-new-years-resolutions",
    publishedAt: "2013-10-29T12:58:16+00:00",
    description: "Technology exists to make our lives easier – so why shouldn't technology make our New Year's goals easier to achieve too? With these gadgets, apps and websites, your best self is within reach.",
    content: `<p>Technology exists to make our lives easier – so why shouldn't technology make our New Year's goals easier to achieve too? With these gadgets, apps and websites, your best self is within reach.</p>

<h3>Get Fit and Lose Weight</h3>
<p><strong>Fitbit Zip Wireless Activity Tracker ($59.95)</strong><br>
This tiny device clips to your clothing and tracks steps, distance, and calories burned. Sync wirelessly with your computer or smartphone to monitor progress over time.</p>

<h3>Learn New Skills</h3>
<p><strong>Skillshare.com</strong><br>
This online learning platform offers thousands of classes in creative and professional skills. From photography to business, learn from industry experts at your own pace.</p>

<h3>Quit Smoking</h3>
<p><strong>Ruyan E-Pipe and E-Cigar</strong><br>
Electronic alternatives to traditional tobacco products can help ease the transition away from smoking. These devices provide the familiar ritual without many of the harmful chemicals.</p>

<h3>Better Work-Life Balance</h3>
<p><strong>iPlanSuccess App</strong><br>
This productivity app helps you set goals, track habits, and maintain balance between work and personal life. Visual progress tracking keeps you motivated.</p>

<h3>Improve Your Life Overall</h3>
<p><strong>Magic Future Life Coaching System</strong><br>
A comprehensive digital coaching program that provides personalized guidance for achieving your biggest life goals.</p>

<h3>Read More</h3>
<p><strong>E-Readers (Kindle, Nook, etc.)</strong><br>
Make reading more convenient with an e-reader. Carry thousands of books in a device lighter than a paperback, with built-in lighting for reading anywhere.</p>

<p>Whatever your resolutions, there's likely a technological solution to help you succeed. The key is finding the right tools and sticking with them throughout the year.</p>`,
    featuredImage: "/images/categories/leather.jpg",
    author: "Custom USB Source",
    categories: ["Holidays"],
    tags: ["E-Readers", "New Years", "Phones"],
    readingTime: calculateReadingTime("Technology exists to make our lives easier – so why shouldn't technology make our New Year's goals easier to achieve too?"),
    excerpt: generateExcerpt("Technology exists to make our lives easier – so why shouldn't technology make our New Year's goals easier to achieve too? With these gadgets, apps and websites, your best self is within reach.")
  },
  {
    id: "6",
    title: "Get a Smart Home with Your Smart Phone",
    slug: "get-a-smart-home-with-your-smart-phone",
    publishedAt: "2013-11-06T13:10:54+00:00",
    description: "Homes of the Future were staple exhibits at the World's Fairs of the 19th and early 20th centuries. They appear in 1960's cartoon The Jetsons and futuristic features made their ways into the cabins of the Star Trek Enterprise...",
    content: `<p>Homes of the Future were staple exhibits at the World's Fairs of the 19th and early 20th centuries. They appear in 1960's cartoon The Jetsons and futuristic features made their ways into the cabins of the Star Trek Enterprise.</p>

<p>Today, many of these "futuristic" features are becoming reality, and your smartphone is the key to controlling them all.</p>

<h3>Smart Door Locks</h3>
<p><strong>Kevo, Lockitron, Kwikset</strong><br>
Electronic deadbolts that can be controlled from your iPhone. Grant access to family members, lock/unlock remotely, and receive notifications when someone enters or leaves.</p>

<h3>Intelligent Lighting</h3>
<p><strong>Phillips LED Bulbs ($299 for 3-pack)</strong><br>
Smart LED bulbs controllable via iPhone app. Adjust brightness, change colors, set schedules, and even sync lighting with music or movies.</p>

<h3>Pet Care Automation</h3>
<p><strong>PintoFeed iPhone App</strong><br>
Control automatic pet feeders remotely and monitor your pets with built-in security cameras. Never worry about forgetting to feed your furry friends again.</p>

<h3>Garage Door Control</h3>
<p><strong>MyDoorOpener</strong><br>
Transform any garage door opener into a smart system. Open, close, and monitor your garage door from anywhere in the world using your smartphone.</p>

<h3>The Connected Home</h3>
<p>These are just the beginning. As IoT (Internet of Things) technology advances, we'll see smart thermostats, security systems, appliances, and more – all controllable from the device in your pocket.</p>

<p>The future is here, and it's remarkably affordable. Start with one smart device and gradually build your connected home ecosystem.</p>`,
    featuredImage: "/images/categories/cards.jpg",
    author: "Custom USB Source",
    categories: ["Technology"],
    tags: ["Phones", "Smart Homes"],
    readingTime: calculateReadingTime("Homes of the Future were staple exhibits at the World's Fairs..."),
    excerpt: generateExcerpt("Homes of the Future were staple exhibits at the World's Fairs of the 19th and early 20th centuries. They appear in 1960's cartoon The Jetsons and futuristic features made their ways into the cabins of the Star Trek Enterprise...")
  },
  {
    id: "7",
    title: "The Five Blogs You Need To Stay Up On Tech News",
    slug: "the-five-blogs-you-need-to-stay-up-on-tech-news",
    publishedAt: "2013-11-04T13:07:31+00:00",
    description: "Whether you want to stay abreast of the changes in your industry, love technology, or need water-cooler conversation material now that Breaking Bad is over, these are the blogs and websites that will keep you conversant in the latest technological and scientific news.",
    content: `<p>Whether you want to stay abreast of the changes in your industry, love technology, or need water-cooler conversation material now that Breaking Bad is over, these are the blogs and websites that will keep you conversant in the latest technological and scientific news.</p>

<h3>1. Ars Technica</h3>
<p>Covers wide-ranging technology topics with in-depth analysis and expert commentary. From hardware reviews to policy discussions, Ars Technica provides comprehensive coverage for serious tech enthusiasts.</p>

<h3>2. Engadget</h3>
<p>Offers weekly roundups and daily reports on consumer technology. Known for breaking news about gadgets, smartphones, and emerging tech trends. Their hands-on reviews are particularly valuable.</p>

<h3>3. Wired</h3>
<p>Combines technology news with cultural commentary and forward-thinking analysis. Wired covers not just what's happening now, but what it means for the future. Great for both nerdy entertainment and serious tech insights.</p>

<h3>4. GigaOM</h3>
<p>A large technology blog network featuring news and analysis from multiple expert contributors. Covers enterprise technology, startups, and emerging markets with a business-focused perspective.</p>

<h3>5. ComputerWorld</h3>
<p>A compilation site featuring multiple technology bloggers and industry experts. Their "Shark Tank" blog features entertaining "true tales of IT life" alongside serious industry coverage.</p>

<h3>Staying Informed</h3>
<p>Subscribe to RSS feeds, follow these sites on social media, or set up Google Alerts for topics that interest you most. The key to staying current is finding reliable sources and checking them regularly.</p>

<p>With these five resources, you'll always have something interesting to contribute to tech discussions and stay ahead of industry trends.</p>`,
    featuredImage: "/images/categories/pens.jpg",
    author: "Custom USB Source",
    categories: ["Technology"],
    tags: ["Arstechnica", "ComputerWorld", "EndGadget", "GigaOM", "Wired"],
    readingTime: calculateReadingTime("Whether you want to stay abreast of the changes in your industry..."),
    excerpt: generateExcerpt("Whether you want to stay abreast of the changes in your industry, love technology, or need water-cooler conversation material now that Breaking Bad is over, these are the blogs and websites that will keep you conversant in the latest technological and scientific news.")
  },
  {
    id: "8",
    title: "Top 5 Console Games For Christmas 2013",
    slug: "top-5-console-games-for-christmas-2013",
    publishedAt: "2013-10-27T12:57:30+00:00",
    description: "The number-one item on every little girl and boy's wish list this year is likely to be either Playstation 4 (Out November 15th) or Xbox One (Available November 29th), and both game consoles have a lot to offer.",
    content: `<p>The number-one item on every little girl and boy's wish list this year is likely to be either Playstation 4 (Out November 15th) or Xbox One (Available November 29th), and both game consoles have a lot to offer.</p>

<p>But what good is a shiny new console without games? Here are the top 5 console games to watch for this Christmas:</p>

<h3>5. Call of Duty: Ghosts (November 5th)</h3>
<p>The latest installment in the blockbuster franchise brings new storylines, improved graphics, and enhanced multiplayer modes. Available on both current and next-gen consoles.</p>

<h3>4. Batman: Arkham Origins (October 25th)</h3>
<p>A prequel to the acclaimed Arkham series, featuring a younger Batman facing off against classic villains. The game promises the same great gameplay with a fresh perspective on the Dark Knight's origin story.</p>

<h3>3. Grand Theft Auto V (September 17th)</h3>
<p>Already released and breaking sales records, GTA V offers an massive open world, three playable protagonists, and countless hours of criminal mayhem in Los Santos.</p>

<h3>2. Assassin's Creed IV: Black Flag (October 29th)</h3>
<p>Set sail in the golden age of piracy with this maritime adventure. Captain Edward Kenway leads players through the Caribbean in what promises to be the most ambitious Assassin's Creed yet.</p>

<h3>1. Beyond: Two Souls (October 8th)</h3>
<p>Starring Ellen Page and Willem Dafoe, this interactive drama from the creators of Heavy Rain pushes the boundaries between gaming and cinema. A unique, emotional experience unlike any other game.</p>

<h3>Next-Gen Gaming</h3>
<p>With new consoles launching this holiday season, many of these games will offer enhanced versions for PS4 and Xbox One, featuring improved graphics, faster loading times, and exclusive features.</p>

<p>Whether you're shopping for yourself or someone special, these games represent the best of what 2013 has to offer in console gaming.</p>`,
    featuredImage: "/images/categories/capless.jpg",
    author: "Custom USB Source",
    categories: ["Gaming", "Holidays"],
    tags: ["Christmas", "PS3", "PS4", "Xbox 360", "Xbox One"],
    readingTime: calculateReadingTime("The number-one item on every little girl and boy's wish list this year is likely to be either Playstation 4..."),
    excerpt: generateExcerpt("The number-one item on every little girl and boy's wish list this year is likely to be either Playstation 4 (Out November 15th) or Xbox One (Available November 29th), and both game consoles have a lot to offer.")
  },
  {
    id: "9",
    title: "Top Five Geek Gifts For Christmas",
    slug: "top-five-geek-gifts-for-christmas",
    publishedAt: "2013-10-21T12:44:12+00:00",
    description: "Need some winter holiday gift ideas for your favorite Geek? Here's a roundup of the hottest gifts for nerds, geeks, technology buffs, and 12-year olds everywhere.",
    content: `<p>Need some winter holiday gift ideas for your favorite Geek? Here's a roundup of the hottest gifts for nerds, geeks, technology buffs, and 12-year olds everywhere.</p>

<h3>1. Gaming Systems</h3>
<p><strong>PlayStation 4, Xbox One</strong><br>
The next generation of gaming consoles launches this holiday season. Pair with must-have games like Assassin's Creed IV: Black Flag for the ultimate gift.</p>

<h3>2. Creative Items</h3>
<p><strong>Shirt.Woot.com T-Shirts</strong><br>
Unique, geeky t-shirt designs that change daily. From pop culture references to clever programming jokes, there's something for every type of geek.</p>

<h3>3. Hi-Tech Toys</h3>
<p><strong>Google Chromecast (Under $40)</strong><br>
Stream content from smartphones, tablets, and computers directly to any TV. Simple setup and universal compatibility make it perfect for tech enthusiasts.</p>

<p><strong>Mini-Helicopters</strong><br>
Remote-controlled helicopters with smartphone apps, camera integration, and precision controls. The perfect blend of technology and fun.</p>

<h3>4. Practical Gadgets</h3>
<p><strong>Internet Music Streaming Radio</strong><br>
Standalone devices that stream Pandora, Spotify, and other services without needing a computer. Perfect for the audiophile who loves discovering new music.</p>

<p><strong>Neato XV Signature Pro Robotic Vacuum</strong><br>
Let robots handle the cleaning! Advanced navigation and powerful suction make household chores effortless.</p>

<h3>5. Swords</h3>
<p>From Nerf foam swords for safe indoor battles to authentic katana replicas for serious collectors, swords appeal to the warrior spirit in every geek.</p>

<h3>Shopping Tips</h3>
<p>Start early for the best selection, compare prices across multiple retailers, and don't forget about digital gifts like game downloads, streaming subscriptions, and online course enrollments.</p>

<p>The key to great geek gifts is finding items that combine functionality with that special spark of innovation and fun that makes technology exciting.</p>`,
    featuredImage: "/images/products/BeemerRemoteET-125-3.png",
    author: "Custom USB Source",
    categories: ["Holidays"],
    tags: ["Christmas", "PS4", "Xbox One"],
    readingTime: calculateReadingTime("Need some winter holiday gift ideas for your favorite Geek?"),
    excerpt: generateExcerpt("Need some winter holiday gift ideas for your favorite Geek? Here's a roundup of the hottest gifts for nerds, geeks, technology buffs, and 12-year olds everywhere.")
  },
  {
    id: "10",
    title: "Top Ten Coolest Flash Drives",
    slug: "top-ten-coolest-flash-drives",
    publishedAt: "2013-09-09T23:10:58+00:00",
    description: "Looking for the coolest flash drives? There are so many options in cool USB drives – the sky is the limit! We sell dozens of models from sophisticated metallic drives and classy natural wood drives to the really wild styles that grab attention wherever they go.",
    content: `<p>Looking for the coolest flash drives? There are so many options in cool USB drives – the sky is the limit! We sell dozens of models from sophisticated metallic drives and classy natural wood drives to the really wild styles that grab attention wherever they go.</p>

<p>Here are our top 10 picks for the coolest flash drives available:</p>

<h3>10. The Cigar</h3>
<p>Perfect for the distinguished professional, this realistic cigar-shaped USB drive is sure to be a conversation starter. Made with premium materials and attention to detail.</p>

<h3>9. Beemer Remote</h3>
<p>Designed to look like a BMW key fob, this drive appeals to automotive enthusiasts and luxury car lovers. Sleek, sophisticated, and functional.</p>

<h3>8. The Football</h3>
<p>Score big with sports fans! This football-shaped drive is perfect for coaches, players, and fans. Great for storing game footage, playbooks, or team photos.</p>

<h3>7. Classic Guitar</h3>
<p>Rock on with this detailed guitar USB drive. Perfect for musicians, music teachers, or anyone who loves the six-string sound.</p>

<h3>6. Long Haul Truck</h3>
<p>Hit the road with this detailed truck driver's dream. Great for logistics companies, trucking enthusiasts, or anyone who appreciates the open highway.</p>

<h3>5. Bullet</h3>
<p>This military-inspired design packs a punch. Made from actual bullet casings (deactivated, of course), it's perfect for law enforcement, military personnel, or collectors.</p>

<h3>4. Exec Pen</h3>
<p>The ultimate in professional sophistication – a working pen that doubles as a USB drive. Write important notes and store important files in one elegant device.</p>

<h3>3. Swivel-Snap Leather Drive</h3>
<p>Premium leather construction meets practical design. The swivel cap prevents loss while the leather aging creates a unique patina over time.</p>

<h3>2. Wooden Cross</h3>
<p>"Proof that Jesus saves" – this clever religious-themed drive combines faith with functionality. Made from real wood with beautiful natural grain.</p>

<h3>1. Transformer</h3>
<p>The ultimate cool factor! This USB drive transforms from muscle car to wildcat to USB drive. Three modes of awesome in one amazing device.</p>

<h3>Why Choose a Cool USB Drive?</h3>
<p>Beyond the wow factor, unique USB drives serve as excellent marketing tools, memorable gifts, and conversation starters. They reflect personality and make data storage fun!</p>`,
    featuredImage: "/images/products/CigarET-114-1.png",
    author: "Custom USB Source",
    categories: ["Custom USB Drives", "Promotional USB Drives"],
    tags: ["Beemer Remote USB Drives", "Bullet USB Drives", "Cigar USB Drives", "Football USB Drives", "Guitar USB Drives", "Long Haul Truck USB Drives", "Pen USB Drives", "Swivel Snap USB Drives", "Transformer USB Drives", "Wooden Cross USB Drives"],
    readingTime: calculateReadingTime("Looking for the coolest flash drives? There are so many options in cool USB drives..."),
    excerpt: generateExcerpt("Looking for the coolest flash drives? There are so many options in cool USB drives – the sky is the limit! We sell dozens of models from sophisticated metallic drives and classy natural wood drives to the really wild styles that grab attention wherever they go.")
  }
];

export const blogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Custom USB Drives",
    slug: "custom-usb-drives",
    description: "Everything about custom USB drives, tutorials, and tips",
    postCount: 3
  },
  {
    id: "2", 
    name: "Deals & Specials",
    slug: "deals-specials",
    description: "Latest deals, promotions, and special offers",
    postCount: 2
  },
  {
    id: "3",
    name: "Technology",
    slug: "technology", 
    description: "Technology news, trends, and insights",
    postCount: 2
  },
  {
    id: "4",
    name: "Holidays",
    slug: "holidays",
    description: "Holiday gift guides and seasonal content",
    postCount: 3
  },
  {
    id: "5",
    name: "Gaming",
    slug: "gaming",
    description: "Gaming news, reviews, and recommendations", 
    postCount: 1
  },
  {
    id: "6",
    name: "Tutorials",
    slug: "tutorials",
    description: "How-to guides and educational content",
    postCount: 1
  },
  {
    id: "7",
    name: "Promotional USB Drives",
    slug: "promotional-usb-drives",
    description: "Promotional and marketing USB drive solutions",
    postCount: 1
  }
];

export const blogTags: BlogTag[] = [
  { id: "1", name: "Cyber Monday", slug: "cyber-monday", postCount: 1 },
  { id: "2", name: "Uses for USB Drives", slug: "uses-for-usb-drives", postCount: 2 },
  { id: "3", name: "USB Tutorials", slug: "usb-tutorials", postCount: 1 },
  { id: "4", name: "Black Friday", slug: "black-friday", postCount: 1 },
  { id: "5", name: "E-Readers", slug: "e-readers", postCount: 2 },
  { id: "6", name: "New Years", slug: "new-years", postCount: 1 },
  { id: "7", name: "Phones", slug: "phones", postCount: 2 },
  { id: "8", name: "Smart Homes", slug: "smart-homes", postCount: 1 },
  { id: "9", name: "Christmas", slug: "christmas", postCount: 3 },
  { id: "10", name: "PS4", slug: "ps4", postCount: 2 },
  { id: "11", name: "Xbox One", slug: "xbox-one", postCount: 2 }
];

// Utility functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.categories.some(cat => cat.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '') === categorySlug)
  );
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter(post =>
    post.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === tagSlug)
  );
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}