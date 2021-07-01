/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="flex w-11/12" style={{ height: "calc(90vh - 131px)", minHeight: "600px" }}>
        <div className="flex flex-col items-start justify-center w-1/2 text-white">
          <h1 className={`font-black z-10 ${styles["mainTitle"]}`} >John McCarthy</h1>
          <h2 className={`font-semibold z-10 ${styles["subTitle"]}`}>for Montgomery County <br />
            State’s Attorney</h2>
          <h3 className={`mt-2 z-10 ${styles["lastTitle"]}`}>A Record of Reform and Innovation</h3>

          <Link href="/donate">
            <a className="px-6 py-4 mt-6 text-3xl font-extrabold transition-opacity bg-white hover:opacity-70" style={{ color: "#0015BC" }}>Donate</a>
          </Link>
        </div>
        <img alt="John McCarthy Frontal" src="/john_mccarthy_frontal_new.png" className="object-contain object-bottom mx-auto" style={{ width: "45%" }} />
      </div>
      <div id="#About" className="flex flex-col w-11/12 p-3 text-lg bg-white rounded-lg">
        <h1 className="text-3xl font-extrabold lg:text-4xl">About</h1>
        <p className="mt-2">
          We are committed to implementing fair and forward-thinking
          criminal justice policies, creating opportunities for youth and
          disadvantaged people through innovative intervention and
          prevention programs while keeping our communities safe from
          violent offenders. Balancing mercy, justice and accountability
          under the law for all people in Montgomery County is the
          ultimate goal.
        </p>
        <p className="mt-4">
          John McCarthy was born on March 3, 1952 in Jersey City, New
          Jersey. John is the oldest of six children. John's father, John
          'Jack' McCarthy, now deceased, was a World War II Navy Veteran
          who served his country in both the European and Asian theaters.
          Following World War II, John's father attended Georgetown
          University on the GI Bill. John's mother, Jane, also deceased,
          was the oldest of nine children. John's commitment to public
          service was inspired by the example of his parents.
        </p>

        <p className="mt-4">
          John attended both grammar and high school in the New Jersey
          suburbs outside of Philadelphia. John graduated from Camden
          Catholic High School in Cherry Hill, New Jersey in 1970, where
          he served as student government president his senior year. John
          attended Catholic University of America on a baseball
          scholarship between 1970 and 1974. Following his graduation from
          Catholic University, John taught at Good Counsel High School in
          Wheaton, Maryland and, while teaching, John attended law school
          in the evenings at the University of Baltimore. John graduated
          in 1979. John was admitted to the Maryland Bar in 1979 and began
          his legal career in private practice. John joined the State's
          Attorney's Office for Prince George's County in 1980 and
          eighteen months later became a Public Defender in Montgomery
          County. John joined the State's Attorney's Office for Montgomery
          County in 1982.
        </p>
        <p className="mt-4">
          Before ascending to the position of State's Attorney in 2006,
          John served as Deputy State's Attorney in Montgomery County for
          ten years. Prior to that, John had headed every major trial
          division in the office. John is the father of four children, and
          grandfather to five.
        </p>
      </div>
      <div id="#News" className="flex flex-col w-11/12">
        <h1 className="mt-8 mb-4 text-3xl font-extrabold text-white lg:text-4xl">News</h1>

        <iframe
          width="100%"
          height="650"
          src="https://www.youtube.com/embed/8AKVUq6VdLA?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mb-8"
        ></iframe>

        <iframe width="100%" height="650" scrolling="no" frameBorder="0" allowFullScreen webkitallowfullscreen="true"
          mozallowfullscreen="true" allow="autoplay; fullscreen"
          src="https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6IjY2ODU3OTMiLCJhbnZhY2siOiIyZzFHbzRlMVdNUHBxY3pEOE5jSnB0NWdleEw0MG5ESiIsInNoYXJlTGluayI6Imh0dHBzOi8vd3d3LmxvY2FsZHZtLmNvbS9uZXdzL21vbnRnb21lcnktY28tc3RhdGVzLWF0dG9ybmV5LXJldmlld3MtZGF0YS1pbi1jcmltaW5hbC1qdXN0aWNlLXN5c3RlbS8iLCJwbHVnaW5zIjp7ImNvbXNjb3JlIjp7ImNsaWVudElkIjoiNjAzNjQzOSIsImMzIjoibG9jYWxkdm0uY29tIiwic2NyaXB0IjoiLy93My5jZG4uYW52YXRvLm5ldC9wbGF5ZXIvcHJvZC92My9wbHVnaW5zL2NvbXNjb3JlL2NvbXNjb3JlcGx1Z2luLm1pbi5qcyIsInVzZURlcml2ZWRNZXRhZGF0YSI6dHJ1ZSwibWFwcGluZyI6eyJ2aWRlbyI6eyJjMyI6ImxvY2FsZHZtLmNvbSIsIm5zX3N0X3N0Ijoid2R2bSIsIm5zX3N0X3B1IjoiTmV4c3RhciIsIm5zX3N0X2dlIjoiTmV3cyxOZXdzLFZpZGVvLFZpZGVvIiwiY3NfdWNmciI6IiJ9LCJhZCI6eyJjMyI6ImxvY2FsZHZtLmNvbSIsIm5zX3N0X3N0Ijoid2R2bSIsIm5zX3N0X3B1IjoiTmV4c3RhciIsIm5zX3N0X2dlIjoiTmV3cyxOZXdzLFZpZGVvLFZpZGVvIiwiY3NfdWNmciI6IiJ9fX0sImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cHM6Ly9wdWJhZHMuZy5kb3VibGVjbGljay5uZXQvZ2FtcGFkL2Fkcz9zej0xeDEwMDAmaXU9LzU2Nzgvbngud2hhZy9uZXdzJmltcGw9cyZnZGZwX3JlcT0xJmVudj12cCZvdXRwdXQ9dm1hcCZ1bnZpZXdlZF9wb3NpdGlvbl9zdGFydD0xJmFkX3J1bGU9MSZkZXNjcmlwdGlvbl91cmw9aHR0cHM6Ly93d3cubG9jYWxkdm0uY29tL25ld3MvbW9udGdvbWVyeS1jby1zdGF0ZXMtYXR0b3JuZXktcmV2aWV3cy1kYXRhLWluLWNyaW1pbmFsLWp1c3RpY2Utc3lzdGVtLyZ2Y29ucD0yJmN1c3RfcGFyYW1zPXZpZCUzRDY2ODU3OTMlMjZjbXNpZCUzRDg1NTM3MyUyNnBpZCUzRDg1NTM3MyUyNnZpZGNhdCUzRCUyRm5ld3MlMjZib2JfY2slM0QlNUJib2JfY2tfdmFsJTVEJTI2ZF9jb2RlJTNEbmEwMDMlMjZwbGF5ZXJ3aWR0aCUzRDg3NiUyNnBsYXllcmhlaWdodCUzRDQ5MyJ9fSwibmllbHNlbiI6eyJhcGlkIjoiUDE2N0MyMkM4LTFCRkItNDA0Qi1CQjY1LUVCOEQ4MkQxQUZBMSIsInNmY29kZSI6ImRjciIsInR5cGUiOiJkY3IiLCJhcG4iOiJBbnZhdG8iLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJ1c2VEZXJpdmVkTWV0YWRhdGEiOnRydWUsIm1hcHBpbmciOnsiYWRsb2FkdHlwZSI6MiwiYWRNb2RlbCI6Mn0sIm9wdE91dCI6ZmFsc2V9LCJzZWdtZW50Q3VzdG9tIjp7InNjcmlwdCI6Imh0dHBzOi8vc2VnbWVudC5wc2cubmV4c3RhcmRpZ2l0YWwubmV0L2FudmF0by5qcyIsIndyaXRlS2V5IjoiNjdEZTVqREE0NWRTU3dhQmRmWXRUeHh3dGZjbGpkeXUifSwiZ29vZ2xlQW5hbHl0aWNzIjp7InRyYWNraW5nSWQiOiJVQS0zNzE0NDkwMS0yIiwiZXZlbnRzIjp7IkFEX1NUQVJURUQiOnsiYWxpYXMiOiJWaWRlby1BZCIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19TVEFSVEVEIjp7ImFsaWFzIjoiVmlkZW8tUGxheSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19GSVJTVF9RVUFSVElMRSI6eyJhbGlhcyI6IlZpZGVvLTI1JSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19NSURfUE9JTlQiOnsiYWxpYXMiOiJWaWRlby01MCUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fVEhJUkRfUVVBUlRJTEUiOnsiYWxpYXMiOiJWaWRlby03NSUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fQ09NUExFVEVEIjp7ImFsaWFzIjoiVmlkZW8tMTAwJSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJVU0VSX1BBVVNFIjp7ImFsaWFzIjoiUGF1c2UiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVVNFUl9SRVNVTUUiOnsiYWxpYXMiOiJSZXN1bWUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifX19LCJoZWFsdGhBbmFseXRpY3MiOnt9fSwiaHRtbDUiOnRydWUsInRva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjJhV1FpT2lJMk5qZzFOemt6SWl3aWFYTnpJam9pTW1jeFIyODBaVEZYVFZCd2NXTjZSRGhPWTBwd2REVm5aWGhNTkRCdVJFb2lMQ0psZUhBaU9qRTJNalF5T1Rjd09UTjkuMVR6WkxqcmxfXzNGakRjWUkzdGg1MDNiVzVsT25QZkQwenFLMjJKdzN4YyJ9"></iframe>

        {/* <script type="text/javascript" charSet="UTF-8"
          src="https://nbcwashington.com/portableplayer/?CID=1:14:2699391&videoID=1908325443504&origin=nbcwashington.com&fullWidth=y">
        </script> */}
      </div>
      <div id="#Innovation" className="flex flex-col w-11/12 p-3 mt-16 mb-4 text-lg bg-white rounded-lg">
        <h1 className="text-3xl font-extrabold lg:text-4xl">Innovation and Forward Thinking</h1>
        <ul>
          <li>Lead the establishment of Mental Health Courts for Montgomery County</li>
          <li>First in Maryland to commission outside, independent researchers to review criminal justice processes
            for racial or ethnic bias through Prosecutorial Performance Indicators (PPI)</li>
          <li>Reduced crime by 29% and jail population by 35% during his time as State's Attorney</li>
          <li>Co-directed the Family Justice Center to counter domestic violence and provide vital support to victims
            and families</li>
          <li>Became the first State's Attorney in the nation to establish independent prosecution and reviews in
            police use-of-force cases</li>
          <li>First to halt criminal prosecution of marijuana possession in Maryland</li>
          <li>Diverted over 8,800 non-violent criminal offenders to community service from prosecution and over 2,500
            minor drug offenders to treatment rather than jail through the establishment of the Drug Court and other
            diversionary programs</li>
          <li>Protected senior citizens of the community by creating elder abuse victim prosecution teams</li>
          <li>Instituted the Truancy Prevention Program which mentors middle school students - 90% of whom are
            underserved</li>
          <li>Coordinated and implemented the "Choose Respect" program to reduce teen dating violence</li>
          <li>Co-founded the "Speak Up, Save a Life" program that promotes opiate awareness and presented it to over
            70,000 students </li>
          <li>Advocated for gender equality in the workplace and currently has 5 out of 7 teams headed by women with
            65% of his attorney staff being women</li>
        </ul>
      </div>
    </>
  )
}
