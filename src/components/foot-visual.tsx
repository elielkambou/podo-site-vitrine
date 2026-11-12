export function FootVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`foot-visual ${compact ? "foot-visual-compact" : ""}`}
      role="img"
      aria-label="Illustration conceptuelle d’une forme de pied avec axes de longueur et de largeur, sans mesure chiffrée"
    >
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-topline">
        <span>ÉTUDE DE FORME</span>
        <span>01 / 03</span>
      </div>
      <svg
        className="foot-svg"
        viewBox="0 0 600 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="footFill"
            x1="115"
            y1="90"
            x2="470"
            y2="430"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DDF2EC" />
            <stop offset="1" stopColor="#99CFC6" />
          </linearGradient>
          <linearGradient
            id="footShade"
            x1="190"
            y1="50"
            x2="455"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F8993" />
            <stop offset="1" stopColor="#0B4052" />
          </linearGradient>
        </defs>
        <ellipse
          cx="300"
          cy="420"
          rx="178"
          ry="22"
          fill="#0E3545"
          opacity=".12"
        />
        <path
          d="M197 392C171 369 161 335 167 291C172 254 193 219 208 193C228 159 244 125 266 105C283 89 299 87 315 96C329 104 336 119 346 137C355 153 365 164 381 177C400 192 414 220 421 246C432 286 423 333 406 363C386 396 348 413 307 414C263 414 221 411 197 392Z"
          fill="url(#footShade)"
        />
        <path
          d="M191 376C171 355 166 324 175 285C187 235 208 201 233 155C247 128 261 106 280 96C297 87 314 93 326 110C337 126 347 151 365 169C395 199 415 244 416 287C417 329 402 363 376 385C347 409 218 406 191 376Z"
          fill="url(#footFill)"
          stroke="#2C7180"
          strokeWidth="3"
        />
        <path
          d="M211 366C239 379 265 379 298 376C337 372 372 354 391 325M192 315C221 329 261 328 296 317C341 302 374 277 400 244M212 246C238 260 271 258 299 246C328 233 350 205 365 176"
          stroke="#3B8D91"
          strokeWidth="2"
          opacity=".7"
        />
        <path
          d="M216 218C235 231 265 233 288 221M235 171C251 183 272 184 292 174M258 127C268 137 284 141 300 136"
          stroke="#67AAA5"
          strokeWidth="2"
        />
        <path
          d="M282 95C275 73 286 55 302 58C316 62 321 79 314 95M317 96C316 69 335 58 349 66C361 75 354 96 338 110M340 116C353 91 374 88 385 101C396 115 379 135 360 143M365 148C385 131 404 136 409 152C414 168 397 181 379 180"
          fill="url(#footFill)"
          stroke="#2C7180"
          strokeWidth="3"
        />
        <path
          d="M134 93V409M126 93H142M126 409H142M166 272H432M166 264V280M432 264V280"
          stroke="#28A99A"
          strokeWidth="2"
          strokeDasharray="7 7"
        />
        <circle cx="166" cy="272" r="5" fill="#28A99A" />
        <circle cx="432" cy="272" r="5" fill="#28A99A" />
        <circle cx="134" cy="93" r="5" fill="#28A99A" />
        <circle cx="134" cy="409" r="5" fill="#28A99A" />
        <path d="M407 368L461 383" stroke="#238A85" strokeWidth="2" />
        <circle cx="407" cy="368" r="5" fill="#238A85" />
      </svg>
      <span className="visual-label visual-label-length">LONGUEUR</span>
      <span className="visual-label visual-label-width">LARGEUR</span>
      <span className="visual-label visual-label-note">SURFACE OBSERVÉE</span>
      <div className="visual-bottomline">
        <span>Illustration conceptuelle</span>
        <span>Échelle à vérifier</span>
      </div>
    </div>
  );
}
