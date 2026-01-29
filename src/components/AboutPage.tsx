export const AboutPage = () => {
    const startYear = Number(import.meta.env.VITE_EXP_YEAR) || 2023;
    const expYears = new Date().getFullYear() - startYear - 1;
    console.log('Experience Years:', expYears);
  return (
    <div className="text-wrap max-w-3xl text-center text-neutral-300 px-4">
        A Full-Stack Developer with {expYears}+ years of experience building scalable Web Applications using React, Next.js, Node.js/Express, and PostgreSQL - delivering seamless user experiences and clean, maintainable code in TypeScript.
    </div>
  )
}