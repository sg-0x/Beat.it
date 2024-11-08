## File Structure

```plaintext
Beat.it/
├── backend/                                   # Backend-related files
│   ├── server.js                              # Server app
├── database/                                  # Database-related files
│   ├── data/                                  # Data files
│   │   ├── profileData.json                   # JSON file containing profile details
│   │   ├── songsData.json                     # JSON file containing song details
│   ├── uploads/                               # Uploaded files
│   │   ├── main-yahaan-hoon.mp3               # Song-1
│   │   ├── kabhi-kabhi-aditi.mp3              # Song-2
│   │   ├── sooraj-ki-baahon-mein.mp3          # Song-3
├── frontend/                                  # Frontend-related files
│   ├── public/                                # Public assets
│   │   ├── index.html                         # Main HTML file for frontend
│   ├── src/                                   # Source files
│   │   ├── assets/                            # Asset files
│   │   │   ├── home/                          # Home-related images
│   │   │   │   ├── Album Cover - 1.webp       # Album cover image 1
│   │   │   │   ├── Album Cover - 2.webp       # Album cover image 2
│   │   │   │   ├── Album Cover - 3.webp       # Album cover image 3
│   │   │   │   ├── Search.webp                # Search image
│   │   │   │   ├── Song Cover - 1.webp        # Song cover image 1
│   │   │   │   ├── Song Cover - 2.webp        # Song cover image 2
│   │   │   │   ├── volume.png                 # Volume icon
│   │   │   ├── login/                         # Login-related images
│   │   │   │   ├── Background.webp            # Login background image
│   │   │   ├── profile/                       # Profile-related images
│   │   │   │   ├── Shrey Jaiswal Pic.webp     # Profile image of Shrey Jaiswal
│   │   │   ├── search/                        # Search-related images
│   │   │   │   ├── Artist Closeup.webp        # Closeup image of artist
│   │   │   ├── signup/                        # Signup-related images
│   │   │   │   ├── DJ Girl.webp               # DJ girl image for signup
│   │   │   │   ├── Graphic Design.webp        # Graphic design element for signup
│   │   │   │   ├── Singing Boy.webp           # Singing boy image for signup
│   │   │   ├── songs/                         # Song cover images
│   │   │   │   ├── main-yahaan-hoon.webp      # Song-1 cover
│   │   │   │   ├── kabhi-kabhi-aditi.webp     # Song-2 cover
│   │   │   │   ├── sooraj-ki-baahon-mein.webp # Song-3 cover
│   │   │   ├── Beat.it Logo.webp              # Project logo image
│   │   │   ├── Beat.it White Logo.webp        # Project white logo image
│   │   │   ├── bg-graphic.webp                # Background graphic image
│   │   ├── pages/                             # Page-related files
│   │   │   ├── AlbumPage.html                 # HTML for album page
│   │   │   ├── HomePage.html                  # HTML for home page
│   │   │   ├── LoginPage.html                 # HTML for login page
│   │   │   ├── ProfilePage.html               # HTML for profile page
│   │   │   ├── SearchPage.html                # HTML for search page
│   │   │   ├── SignUpPage.html                # HTML for signup page
│   │   ├── scripts/                           # Script files
│   │   │   ├── apis/                          # API-related scripts
│   │   │   │   ├── fetchSongData.js           # Script to fetch song data
│   │   │   ├── classes/                       # Class files
│   │   │   │   ├── MusicControl.js            # Music control class
│   │   │   │   ├── ProgressSlider.js          # Progress slider class
│   │   │   │   ├── SongControl.js             # Song control class
│   │   │   ├── components/                    # Component scripts
│   │   │   │   ├── navbar.js                  # Script for navbar elements
│   │   │   │   ├── player.js                  # Script for player elements
│   │   │   ├── handlers/                      # Handler scripts
│   │   │   │   ├── formHandler.js             # Form handler script
│   │   │   │   ├── navbarHandler.js           # Navbar handler script
│   │   │   │   ├── playerHandler.js           # Player handler script
│   │   ├── styles/                            # Style files
│   │   │   ├── background.css                 # Styles for background
│   │   │   ├── colors.css                     # Styles for colors
│   │   │   ├── font.css                       # Styles for fonts
│   │   │   ├── form.css                       # Styles for forms
│   │   │   ├── logo.css                       # Styles for logo
│   │   │   ├── navbar.css                     # Styles for navbar
│   │   │   ├── player.css                     # Styles for player
│   │   │   ├── profile.css                    # Styles for profile
│   │   │   ├── song-album.css                 # Styles for song and album
├── .gitattributes                             # Git attributes file
├── .gitignore                                 # Git ignore file
├── LICENSE                                    # License for the project
├── package.json                               # Project configuration and dependencies file
├── README.md                                  # Project documentation
```

<!-- ## Contributors ✨

Thanks to these wonderful people for their contributions!

<a href="https://github.com/ojhaprathmesh/Beat.it/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ojhaprathmesh/Beat.it" />
</a> --> 
