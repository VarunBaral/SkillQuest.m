import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const Homepage: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onABOUTClick = useCallback(() => {
    window.open(
      "https://twitter.com/BaralVarun/status/1653462754563600384?s=20"
    );
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCourses1Click = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onABOUT1Click = useCallback(() => {
    window.open(
      "https://twitter.com/BaralVarun/status/1653462754563600384?s=20"
    );
  }, []);

  const onScreenshot20230430At256Click = useCallback(() => {
    window.open("https://www.figma.com");
  }, []);

  const onIconTwitterClick = useCallback(() => {
    window.open("https://twitter.com/BaralVarun");
  }, []);

  const onIconMailClick = useCallback(() => {
    window.location.href =
      "mailto:varunbaral2k16@gmail.com?subject=Welcome To SkillQuest";
  }, []);

  const onIconGithubClick = useCallback(() => {
    window.open("https://github.com/VarunBaral");
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.homepageChild} />
      <div className={styles.homepageItem} />
      <div className={styles.homepageInner} />
      <img
        className={styles.illustrationStudentWithLaptIcon}
        alt=""
        src="/illustrationstudentwithlaptopstudyingononlinecoursepng-1@2x.png"
      />
      <b className={styles.yourPersonalizedPath}>
        Your personalized path to mastery.
      </b>
      <div className={styles.lookingToKickstart}>
        Looking to kickstart your career? Look no further! Our website provides
        a wealth of educational content that can help you develop the skills and
        knowledge you need to succeed in your chosen field.
      </div>
      <div className={styles.rectangleParent}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
        <div className={styles.thePurposeOf}>
          The purpose of education is to turn mirrors into windows.
        </div>
        <img
          className={styles.n1Icon}
          alt=""
          src="/934666-637641189598667-986001153-n-1@2x.png"
        />
        <b className={styles.syndeyJHarris}>Syndey J. Harris</b>
        <div className={styles.americanJournalist}>American journalist</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <button className={styles.screenshot20230425At1047} />
        <button className={styles.about} onClick={onABOUTClick}>
          ABOUT
        </button>
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButton1Click}
        />
        <button
          className={styles.accessCourses1}
          onClick={onAccessCourses1Click}
        >
          Access Courses
        </button>
      </div>
      <div className={styles.rectangleDiv} />
      <b className={styles.heresWhatYou}>
        Here’s what you can expect when you study from SkillQuest
      </b>
      <div className={styles.homepageChild1} />
      <div className={styles.lineDiv} />
      <button className={styles.about1} onClick={onABOUT1Click}>
        ABOUT
      </button>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <b className={styles.adFreeExperience}>Ad-free experience</b>
        <div className={styles.ourWebsiteOffers}>
          Our website offers an ad-free experience, eliminating the distractions
          of advertisements.
        </div>
        <b className={styles.categorizedContent}>Categorized Content</b>
        <div className={styles.videosAreOrganizedContainer}>
          <p className={styles.videosAreOrganized}>
            Videos are organized into categories, making it easier for students
          </p>
          <p className={styles.videosAreOrganized}>
            {" "}
            to find content on specific subjects.
          </p>
        </div>
        <b className={styles.freeOfCost}>Free of Cost</b>
        <div className={styles.allVideoContent}>
          All video content on our website will be completely free of cost, with
          no hidden fees or costs.
        </div>
        <img
          className={styles.cost10277603401Icon}
          alt=""
          src="/cost1027760--340-1@2x.png"
        />
        <img
          className={styles.screenshot20230430At237}
          alt=""
          src="/screenshot-20230430-at-237@2x.png"
        />
        <img
          className={styles.screenshot20230430At239}
          alt=""
          src="/screenshot-20230430-at-239@2x.png"
        />
      </div>
      <div className={styles.screenshot20230425At1047Parent}>
        <img
          className={styles.screenshot20230425At10471}
          alt=""
          src="/screenshot-20230425-at-1047-11@2x.png"
        />
        <div className={styles.sideProjectBy}>Side Project by Varun Baral</div>
        <div className={styles.solelyMadeOn}>{`Solely made on `}</div>
        <button
          className={styles.screenshot20230430At256}
          onClick={onScreenshot20230430At256Click}
        />
        <div
          className={styles.noAffiliationWith}
        >{`| No affiliation with Youtube | `}</div>
        <div className={styles.theCreditFor}>
          The credit for all the courses listed goes to their respective
          creators.
        </div>
        <button className={styles.iconTwitter} onClick={onIconTwitterClick}>
          <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
        </button>
        <button className={styles.iconMail} onClick={onIconMailClick}>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector5.svg" />
        </button>
        <button className={styles.iconGithub} onClick={onIconGithubClick}>
          <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
          <img className={styles.vectorIcon9} alt="" src="/vector7.svg" />
        </button>
      </div>
    </div>
  );
};

export default Homepage;
