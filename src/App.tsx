import NavbarView from './components/Navbar'
import grunge1 from "./assets/grunge1.jpg"
import grunge_desktop_heading from "./assets/grunge_desktop_heading.jpg"

function App() {

  return (
    <main className="home">
      <NavbarView />
      <div className="image-header">
        <img className="mobile" src={grunge1} alt="" />
        <img src={grunge_desktop_heading} className="desktop" />
        <h1>Hi, I'm <em>Lucas</em>.</h1>
      </div>
      <div className="introduction-contain">
        <p>
          I am a soon-to-be student working towards my cybersecurity and forensics degree. I am located in Scotland and my main cybersecurity interests are 
          network security and secure software/website development. <br /><br />
          This website is ment to showcase me and any project(s) I have been working on as shown below.
        </p>
        <h2>Projects</h2>
        <div className="project-contain">
          <h3>Encrypted Chat App</h3> <br />
          <a href="https://chatapp.lucashoggan.co.uk" target="_blank"><p>https://chatapp.lucashoggan.co.uk</p></a> 
          <a href="https://github.com/lucashoggan/encrypted-chat-website" target="_blank"><p>Source Code</p></a> <br /> <br />
          <p>This is a pretty basic chat app I made that uses asymmetric encryption to keep messages private between users, the server can't even see the messages. In fact all 
            it stores are the usernames and public-keys of the users currently online. Uses an express backend to serve the vite frontend with a socket.io server
            to handle websockets to let clients communicate with eachother.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
