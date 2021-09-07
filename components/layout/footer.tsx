export default function LayoutFooter() {
  return (
    <footer className="flex items-center justify-end pr-4 w-full h-16 text-2xl">
      <nav>
        <a
          href="https://www.linkedin.com/in/jessycormier/"
          target="_blank"
          className="px-1"
        >
          <i
            className="fab fa-fw fa-linkedin"
            title="Seem my LinkedIn profile"
          ></i>
        </a>
        <a
          href="https://github.com/jessycormier"
          target="_blank"
          className="px-1"
        >
          <i
            className="fab fa-fw fa-github"
            title="Check out some of my work on GitHub"
          ></i>
        </a>
        <a
          href="https://stackoverflow.com/users/396842/jessy"
          target="_blank"
          className="px-1"
        >
          <i
            className="fab fa-fw fa-stack-overflow"
            title="See my Stack Overflow profile"
          ></i>
        </a>
        <a
          href="https://twitter.com/jessycormier"
          target="_blank"
          className="px-1"
        >
          <i
            className="fab fa-fw fa-twitter"
            title="Chat with me on Twitter"
          ></i>
        </a>
        <a href="" onClick={displayDiscordName} className="px-1">
          <i
            className="fab fa-fw fa-discord"
            title="Chat with me on Discord!"
          ></i>
        </a>
        <a href="https://dev.to/jessycormier" target="_blank" className="px-1">
          <i className="fab fa-fw fa-dev" title=""></i>
        </a>
      </nav>
    </footer>
  );
}

function displayDiscordName(e) {
  e.preventDefault();
  alert("My discord name is: Jessy#5436");
}
