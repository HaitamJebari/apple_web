import {footerLinks} from '../constants/index.js'

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Ipsa explicabo modi, natus atque
          quos tempora eveniet accusantium possimus aperiam 
          cupiditate repellat quo eum, adipisci laudantium 
          repudiandae alias reprehenderit perferendis sequi.
        </p>
        <img src="/logo.svg" alt="Apple logo" />

        <hr />

        <div className="links">
          <p>Copyright .. 2026 Apple Inc. All rights reserved.</p>
          <ul>
            {footerLinks.map(({ label, link }) => (
              <li key={label}>
                <a href={link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer