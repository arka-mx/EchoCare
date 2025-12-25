import { Github, Mail, Phone } from "lucide-react";
function Footer() {
  return (
    <div className="mt-20 w-full h-fit py-3 px-10 bg-[#F5F6FB] flex items-center justify-between flex-wrap">
      <div>EchoCare &copy; 2025</div>
      <div className="flex gap-5 items-center">
        <a href="tel:+917595882545">
          <Phone className="stroke-1 hover:stroke-2 cursor-pointer" size={18} />
        </a>
        <a href="mailto:ayantik.sarkar2020@gmail.com">
          <Mail className="stroke-1 hover:stroke-2 cursor-pointer" size={18} />
        </a>
        <a href="https://github.com/ayantik2006/EchoCare" target="_blank">
          <Github
            className="stroke-1 hover:stroke-2 cursor-pointer"
            size={18}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
