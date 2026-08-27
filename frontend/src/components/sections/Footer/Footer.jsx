import Logo from "@/components/sections/Header/Logo";
import { footerLinks } from "@/constants";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark">
      <div className="padding-y padding-x text-background">
        <Logo />

        <p>
          Occaecat ut irure minim ad laboris eu commodo Lorem commodo
          nulla commodo aute est sunt
        </p>


        {footerLinks.map(item => (
          <div className="py-6 ">
            <h2 className="font-bold">
              {item.title}
            </h2>

            <ul>
              {item.links.map(linkItem => (
                <li>
                  <Link to={linkItem.link}>
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </footer>
  )
}

export default Footer