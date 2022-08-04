import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { GojuonGroup, Kana } from "../data/kana";

function GojuonRow(
  props: { index: number; group: GojuonGroup },
): JSX.Element {
  const [showDakuten, setShowDakuten] = useState(false);
  const [showHandakuten, setShowHandakuten] = useState(false);
  const dakuSpring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      paddingTop: "0rem",
      paddingBottom: "0rem",
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
    to: {
      height: showDakuten ? "auto" : 0,
      opacity: showDakuten ? 1 : 0,
      paddingTop: showDakuten ? "1rem" : "0rem",
      paddingBottom: showDakuten ? "1rem" : "0rem",
      marginTop: showDakuten ? "0.25rem" : "-0.25rem",
      marginBottom: showDakuten ? "0.25rem" : "-0.25rem",
    },
  });
  const handakuSpring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      paddingTop: "0rem",
      paddingBottom: "0rem",
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
    to: {
      height: showHandakuten ? "auto" : 0,
      opacity: showHandakuten ? 1 : 0,
      paddingTop: showHandakuten ? "1rem" : "0rem",
      paddingBottom: showHandakuten ? "1rem" : "0rem",
      marginTop: showHandakuten ? "0.25rem" : "-0.25rem",
      marginBottom: showHandakuten ? "0.25rem" : "-0.25rem",
    },
  });

  const [showYouon, setShowYouon] = useState(false);
  const [showDakutenYouon, setShowDakutenYouon] = useState(false);
  const [showHandakutenYouon, setShowHandakutenYouon] = useState(false);
  const youonSpring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      paddingTop: "0rem",
      paddingBottom: "0rem",
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
    to: {
      height: showYouon ? "auto" : 0,
      opacity: showYouon ? 1 : 0,
      paddingTop: showYouon ? "1rem" : "0rem",
      paddingBottom: showYouon ? "1rem" : "0rem",
      marginTop: showYouon ? "0.25rem" : "-0.25rem",
      marginBottom: showYouon ? "0.5rem" : "-0.25rem",
    },
  });
  const dakutenYouonSpring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      paddingTop: "0rem",
      paddingBottom: "0rem",
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
    to: {
      height: showDakutenYouon ? "auto" : 0,
      opacity: showDakutenYouon ? 1 : 0,
      paddingTop: showDakutenYouon ? "1rem" : "0rem",
      paddingBottom: showDakutenYouon ? "1rem" : "0rem",
      marginTop: showDakutenYouon ? "0.25rem" : "-0.25rem",
      marginBottom: showDakutenYouon ? "0.5rem" : "-0.25rem",
    },
  });
  const handakutenYouonSpring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      paddingTop: "0rem",
      paddingBottom: "0rem",
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
    to: {
      height: showHandakutenYouon ? "auto" : 0,
      opacity: showHandakutenYouon ? 1 : 0,
      paddingTop: showHandakutenYouon ? "1rem" : "0rem",
      paddingBottom: showHandakutenYouon ? "1rem" : "0rem",
      marginTop: showHandakutenYouon ? "0.25rem" : "-0.25rem",
      marginBottom: showHandakutenYouon ? "0.5rem" : "-0.25rem",
    },
  });

  return (
    <>
      {/* lead consonant */}
      <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
        {props.group.leadConsonant}
      </div>

      {/* gojuon kana */}
      {props.group.kana.map((gojuon, index) =>
        gojuon != null
          ? (
            <div
              key={index}
              onClick={() => {
                if (gojuon.youon != null) {
                  setShowYouon(!showYouon);
                }
              }}
              className={showYouon && gojuon.youon != null
                ? "group relative col-span-1 row-span-1 m-1 -mb-1 flex cursor-pointer flex-col items-center justify-center rounded-t-lg bg-isabelline p-4"
                : "group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg bg-isabelline p-4" +
                  (gojuon.youon != null
                    ? " cursor-pointer border-2 border-emerald-400"
                    : "")}
            >
              <p className="">{gojuon.kana.kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {gojuon.kana.romaji}
              </p>
              {/* digraph (youon) and diacritic ((han)dakuten) indicators */}
              <div className="absolute bottom-1 right-1 flex space-x-1">
                {gojuon.youon != null
                  ? <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  : <div className="w-3"></div>}
                {gojuon.dakuten != null || gojuon.handakuten != null
                  ? <div className="h-3 w-3 rounded-full bg-violet-500"></div>
                  : <div className="w-3"></div>}
              </div>
            </div>
          )
          : <div key={index} className="col-span-1 row-span-1"></div>
      )}

      {/* toggle show dakuten and handakuten buttons */}
      <div className="flex flex-col">
        {props.group && props.group.kana[0] &&
            props.group.kana[0].dakuten != null
          ? (
            <div
              onClick={() => {
                setShowDakuten(!showDakuten);
                setShowDakutenYouon(false);
              }}
              className="col-span-1 row-span-1 m-1 h-2/5 w-3/4 cursor-pointer rounded-lg bg-violet-500 text-center text-xl text-isabelline md:w-1/3"
            >
              <p className="translate-y-1 translate-x-2">゛</p>
            </div>
          )
          : <div className="col-span-1 row-span-1 m-1 h-2/5 w-1/3"></div>}
        {props.group && props.group.kana[0] &&
            props.group.kana[0].handakuten != null
          ? (
            <div
              onClick={() => {
                setShowHandakuten(!showHandakuten);
                setShowHandakutenYouon(false);
              }}
              className="col-span-1 row-span-1 m-1 h-2/5 w-3/4 cursor-pointer rounded-lg bg-violet-500 text-center text-xl text-isabelline md:w-1/3"
            >
              <p className="translate-y-1 translate-x-2">゜</p>
            </div>
          )
          : <div className="col-span-1 row-span-1 m-1 h-2/5 w-1/3"></div>}
      </div>

      {/* gojuon's youon row */}
      {props.group.kana[1]?.youon && (
        <>
          <animated.div style={youonSpring} className="col-span-1">
          </animated.div>
          <animated.div
            style={youonSpring}
            className="col-span-3 mx-1 grid w-auto grid-cols-3 gap-2 rounded-2xl bg-isabelline p-4"
          >
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].youon[0].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].youon[0].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].youon[1].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].youon[1].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].youon[2].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].youon[2].romaji}
              </p>
            </div>
          </animated.div>
          <animated.div style={youonSpring} className="col-span-1">
          </animated.div>
          <animated.div style={youonSpring} className="col-span-2">
          </animated.div>
        </>
      )}

      {/* dakuten row */}
      <>
        <animated.div
          style={dakuSpring}
          className="col-span-1 flex flex-col items-center justify-center text-isabelline underline decoration-2 underline-offset-4"
        >
          {/* {props.group.kana[0]?.dakuten?.romaji[0]} */}
        </animated.div>
        {props.group.kana.map((gojuon, index) =>
          gojuon != null
            ? (
              <animated.div
                key={index}
                onClick={() => {
                  if (gojuon.dakuten?.youon != null) {
                    setShowDakutenYouon(!showDakutenYouon);
                  }
                }}
                style={dakuSpring}
                className={showDakutenYouon && gojuon.dakuten?.youon != null
                  ? "z-1 group relative col-span-1 row-span-1 m-1 !-mb-[0.375rem] flex cursor-pointer flex-col items-center justify-center rounded-t-lg border-2 border-b-0 bg-space-cadet p-4 text-isabelline"
                  : "group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg border-2 p-4 text-isabelline" +
                    (gojuon.dakuten?.youon != null ? " cursor-pointer" : "")}
              >
                <p className="">{gojuon.dakuten?.kana.kana}</p>
                <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                  {gojuon.dakuten?.kana.romaji}
                </p>
                {/* digraph (youon) indicator */}
                <div className="absolute bottom-1 right-1 flex space-x-1">
                  {gojuon.youon != null
                    ? (
                      <div className="h-3 w-3 rounded-full bg-emerald-400">
                      </div>
                    )
                    : <div className="h-3 w-3 rounded-full "></div>}
                </div>
              </animated.div>
            )
            : <div key={index} className="col-span-1 row-span-1"></div>
        )}
        <animated.div style={dakuSpring} className="col-span-1"></animated.div>
      </>

      {/* dakuten's youon row */}
      {props.group.kana[1]?.dakuten?.youon && (
        <>
          <animated.div style={dakutenYouonSpring} className="col-span-1">
          </animated.div>
          <animated.div
            style={dakutenYouonSpring}
            className="col-span-3 mx-1 grid w-auto grid-cols-3 gap-2 rounded-2xl border-2 p-4 text-isabelline"
          >
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].dakuten.youon[0].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].dakuten.youon[0].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].dakuten.youon[1].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].dakuten.youon[1].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].dakuten.youon[2].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].dakuten.youon[2].romaji}
              </p>
            </div>
          </animated.div>
          <animated.div style={dakutenYouonSpring} className="col-span-1">
          </animated.div>
          <animated.div style={dakutenYouonSpring} className="col-span-2">
          </animated.div>
        </>
      )}

      {/* handakuten row */}
      <>
        <animated.div
          style={handakuSpring}
          className="col-span-1 flex flex-col items-center justify-center text-isabelline underline decoration-2 underline-offset-4"
        >
          {/* {props.group.kana[0]?.handakuten?.romaji[0]} */}
        </animated.div>
        {props.group.kana.map((gojuon, index) =>
          gojuon != null
            ? (
              <animated.div
                key={index}
                onClick={() => {
                  if (gojuon.handakuten?.youon != null) {
                    setShowHandakutenYouon(!showHandakutenYouon);
                  }
                }}
                style={handakuSpring}
                className={showHandakutenYouon &&
                    gojuon.handakuten?.youon != null
                  ? "z-1 group relative col-span-1 row-span-1 m-1 !-mb-[0.375rem] flex cursor-pointer flex-col items-center justify-center rounded-t-lg border-2 border-b-0 bg-space-cadet p-4 text-isabelline"
                  : "group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg border-2 p-4 text-isabelline" +
                    (gojuon.handakuten?.youon != null ? " cursor-pointer" : "")}
              >
                <p className="">{gojuon.handakuten?.kana.kana}</p>
                <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                  {gojuon.handakuten?.kana.romaji}
                </p>
                {/* digraph (youon) indicator */}
                <div className="absolute bottom-1 right-1 flex space-x-1">
                  {gojuon.handakuten?.youon != null
                    ? (
                      <div className="h-3 w-3 rounded-full bg-emerald-400">
                      </div>
                    )
                    : <div className="h-3 w-3 rounded-full "></div>}
                </div>
              </animated.div>
            )
            : <div key={index} className="col-span-1 row-span-1"></div>
        )}
        <animated.div style={handakuSpring} className="col-span-1">
        </animated.div>
      </>

      {/* dakuten's youon row */}
      {props.group.kana[1]?.handakuten?.youon && (
        <>
          <animated.div style={handakutenYouonSpring} className="col-span-1">
          </animated.div>
          <animated.div
            style={handakutenYouonSpring}
            className="col-span-3 mx-1 grid w-auto grid-cols-3 gap-2 rounded-2xl border-2 p-4 text-isabelline"
          >
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].handakuten.youon[0].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].handakuten.youon[0].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].handakuten.youon[1].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].handakuten.youon[1].romaji}
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-center justify-center">
              <p>{props.group.kana[1].handakuten.youon[2].kana}</p>
              <p className="h-0 opacity-0 duration-200 group-hover:h-7 group-hover:opacity-100">
                {props.group.kana[1].handakuten.youon[2].romaji}
              </p>
            </div>
          </animated.div>
          <animated.div style={handakutenYouonSpring} className="col-span-1">
          </animated.div>
          <animated.div style={handakutenYouonSpring} className="col-span-2">
          </animated.div>
        </>
      )}
    </>
  );
}

export default GojuonRow;
