function CloudMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 42C15 32 22 28 30 32C32 22 42 20 48 26C53 18 65 20 67 30C77 28 82 38 75 42L18 42Z"
        stroke="#BA7517"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 37C28 34 32 33 34 35"
        stroke="#BA7517"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 37C50 34 54 33 56 35"
        stroke="#BA7517"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Medallion() {
  const curveText = 'Học hôm nay, bứt phá ngày mai';

  return (
    <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
      {/*
        Outer SVG: viewBox is 260×260 so there is ample room above the
        medallion for the text arc. The medallion circle occupies the
        lower portion (center 130,150, radius 100). The text arc uses a
        larger radius (125) so it sits ~25 units outside the circle edge.
      */}
      <svg
        className="block w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px]"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top-half arc with radius 125 centered at (130, 150).
              Start angle ~210°, end angle ~330° → spans the full top.
              Extra arc length on both sides prevents letter clipping. */}
          <path
            id="medallion-top-arc"
            d="M 0 132 C 18 -18 242 -18 260 132"
            fill="none"
          />
        </defs>

        {/* Curved text — gold color with dark shadow for video-background legibility */}
        <text
          fill="#FBC775"
          fontFamily="'Be Vietnam Pro', system-ui, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          style={{ textTransform: 'uppercase', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}
        >
          <textPath
            href="#medallion-top-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            {curveText.toUpperCase()}
          </textPath>
        </text>
      </svg>

      {/* Medallion circle — positioned to overlap the lower portion of the SVG area */}
      <div
        className="absolute left-1/2 top-[57.7%] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: '76.9%',
          height: '76.9%',
          background:
            'radial-gradient(circle at 50% 42%, #FAC775 0%, #FDE4B0 52%, #FDF6E9 100%)',
          border: '2px solid rgba(186, 117, 23, 0.55)',
          boxShadow:
            '0 20px 50px rgba(139, 30, 30, 0.35), 0 8px 20px rgba(0, 0, 0, 0.12)',
        }}
      >
        {/* Inner decorative ring */}
        <div className="absolute inset-[6px] rounded-full border border-[#BA7517]/25" />

        {/* Calligraphy stamp image — hand-brushed 中 character */}
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
          alt="Ấn triện chữ Trung"
          className="relative w-[55%] h-[55%] object-contain drop-shadow-md"
        />

        {/* Cloud motifs — lower-right accent */}
        <div className="absolute bottom-[14%] right-[10%] w-[32%] opacity-70">
          <CloudMotif />
        </div>
        <div className="absolute bottom-[28%] right-[20%] w-[22%] opacity-50">
          <CloudMotif />
        </div>
      </div>
    </div>
  );
}
