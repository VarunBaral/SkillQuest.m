import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./second-page.module.css";
const SecondPage: NextPage = () => {
  const router = useRouter();

  const onScreenshot20230425At1047Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRectangleButtonClick = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onRectangleButton2Click = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onRectangleButton3Click = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onRectangleButton4Click = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onPublicSpeakingClick = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onSalesClick = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onPromptEngineeringClick = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onSendingColdEmailsClick = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onBuildingYourOwnClick = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/excel");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/web-development");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/python");
  }, [router]);

  const onFrameButton3Click = useCallback(() => {
    router.push("/people-management");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    router.push("/uiux");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://youtu.be/VoPS8JEygyM");
  }, []);

  const onFrameButton6Click = useCallback(() => {
    window.open("https://youtu.be/tF7YLGpOoz8");
  }, []);

  const onFrameButton7Click = useCallback(() => {
    window.open("https://youtu.be/4eC_ArZrwkc");
  }, []);

  const onFrameButton8Click = useCallback(() => {
    window.open("https://youtu.be/l_NYrWqUR40");
  }, []);

  const onFrameButton9Click = useCallback(() => {
    window.open("https://youtu.be/BkLzo_oNVho");
  }, []);

  const onFrameButton10Click = useCallback(() => {
    window.open("https://youtu.be/3oIIbGwB-WM");
  }, []);

  const onFrameButton11Click = useCallback(() => {
    window.open("https://youtu.be/-btTC-bepAk");
  }, []);

  const onFrameButton12Click = useCallback(() => {
    window.open("https://youtu.be/_qU3LmhSJW4");
  }, []);

  const onFrameButton13Click = useCallback(() => {
    window.open("https://youtu.be/80UVjkcxGmA");
  }, []);

  const onRectangleButton5Click = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  return (
    <div className={styles.secondPage}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <button
          className={styles.screenshot20230425At1047}
          onClick={onScreenshot20230425At1047Click}
        />
        <b className={styles.about}>ABOUT</b>
      </div>
      <div className={styles.byIshanSharma}>by Ishan Sharma</div>
      <div className={styles.allCategoriesParent}>
        <div className={styles.allCategories}>
          <p className={styles.blankLine}>ALL CATEGORIES:</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <button
          className={styles.frameInner}
          onClick={onRectangleButtonClick}
        />
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButton1Click}
        />
        <button
          className={styles.frameChild1}
          onClick={onRectangleButton2Click}
        />
        <button
          className={styles.frameChild2}
          onClick={onRectangleButton3Click}
        />
        <button
          className={styles.frameChild3}
          onClick={onRectangleButton4Click}
        />
        <button
          className={styles.publicSpeaking}
          onClick={onPublicSpeakingClick}
        >
          <p className={styles.blankLine}>Public Speaking</p>
        </button>
        <button className={styles.sales} onClick={onSalesClick}>
          <p className={styles.blankLine}>Sales</p>
        </button>
        <button
          className={styles.promptEngineering}
          onClick={onPromptEngineeringClick}
        >
          <p className={styles.blankLine}>Prompt Engineering</p>
        </button>
        <button
          className={styles.sendingColdEmailsContainer}
          onClick={onSendingColdEmailsClick}
        >
          <p className={styles.blankLine}>Sending Cold Emails</p>
        </button>
        <button
          className={styles.buildingYourOwnContainer}
          onClick={onBuildingYourOwnClick}
        >
          <p className={styles.blankLine}>Building your Own Personal Brand</p>
        </button>
        <button className={styles.rectangleGroup} onClick={onFrameButtonClick}>
          <div className={styles.rectangleDiv} />
          <div className={styles.excel}>
            <p className={styles.blankLine}>Excel</p>
          </div>
        </button>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButton1Click}
        >
          <div className={styles.frameChild4} />
          <div className={styles.webDevelopment}>
            <p className={styles.blankLine}>Web Development</p>
          </div>
        </button>
        <div className={styles.frameChild5} />
        <button className={styles.pythonWrapper} onClick={onFrameButton2Click}>
          <div className={styles.python}>Python</div>
        </button>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-11.svg" />
        <button
          className={styles.peopleManagementWrapper}
          onClick={onFrameButton3Click}
        >
          <div className={styles.peopleManagement}>
            <p className={styles.blankLine}>People Management</p>
          </div>
        </button>
        <button className={styles.vectorParent} onClick={onFrameButton4Click}>
          <img className={styles.frameChild6} alt="" src="/rectangle-19.svg" />
          <div className={styles.uiux}>
            <p className={styles.blankLine}>UI/UX</p>
          </div>
        </button>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild7} />
        <div className={styles.frameChild8} />
        <div className={styles.frameChild9} />
        <div className={styles.frameChild10} />
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <div className={styles.frameChild13} />
        <div className={styles.frameChild14} />
        <img
          className={styles.screenshot20230426At607}
          alt=""
          src="/screenshot-20230426-at-607-1@2x.png"
        />
        <b className={styles.findYourWhy}>Find Your WHY | Simon Sinek</b>
        <div className={styles.bySimonSinek}>by Simon Sinek</div>
        <img
          className={styles.screenshot20230426At609}
          alt=""
          src="/screenshot-20230426-at-609-1@2x.png"
        />
        <b className={styles.whoGetsThe}>Who Gets The Worst Out of You?</b>
        <div className={styles.byValuetainment}>by Valuetainment</div>
        <img
          className={styles.screenshot20230426At606}
          alt=""
          src="/screenshot-20230426-at-606-1@2x.png"
        />
        <b
          className={styles.ifYouFeel}
        >{`If you feel LOST, LAZY & UNMOTIVATED In Life, WATCH THIS!`}</b>
        <div className={styles.byJayShetty}>by Jay Shetty</div>
        <button className={styles.frameButton} onClick={onFrameButton5Click}>
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent1}
          onClick={onFrameButton6Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent2}
          onClick={onFrameButton7Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent3}
          onClick={onFrameButton8Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent4}
          onClick={onFrameButton9Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent5}
          onClick={onFrameButton10Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent6}
          onClick={onFrameButton11Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <button
          className={styles.rectangleParent7}
          onClick={onFrameButton12Click}
        >
          <div className={styles.frameChild15} />
          <div className={styles.watch}>Watch</div>
        </button>
        <img
          className={styles.screenshot20230426At608}
          alt=""
          src="/screenshot-20230426-at-608-1@2x.png"
        />
        <b className={styles.oneAsanaCan}>One Asana Can Change Your Life</b>
        <div className={styles.bySadhguru}>by SadhGuru</div>
        <img
          className={styles.screenshot20230426At6081}
          alt=""
          src="/screenshot-20230426-at-608-2@2x.png"
        />
        <img
          className={styles.screenshot20230426At611}
          alt=""
          src="/screenshot-20230426-at-611-1@2x.png"
        />
        <b className={styles.tipsToBoostContainer}>
          <p className={styles.blankLine}>3 tips to boost your confidence</p>
        </b>
        <div className={styles.byTedEd}>by TED-Ed</div>
        <img
          className={styles.screenshot20230426At6061}
          alt=""
          src="/screenshot-20230426-at-606-2@2x.png"
        />
        <b className={styles.theTruthAboutContainer}>
          <p className={styles.blankLine}>
            The Truth about Being the “Stupidest” in the Room
          </p>
        </b>
        <div className={styles.bySimonSinek1}>by Simon Sinek</div>
        <img
          className={styles.screenshot20230426At610}
          alt=""
          src="/screenshot-20230426-at-610-3@2x.png"
        />
        <b className={styles.highValueSkills}>
          5 HIGH VALUE SKILLS That Every Student MUST LEARN In 2023
        </b>
        <b className={styles.sadhguruOnThe}>
          Sadhguru on the Lost Concept of Heaven
        </b>
        <div className={styles.byPowerfuljre}>by PowerfulJRE</div>
        <div className={styles.rectangleParent8}>
          <div className={styles.frameChild23} />
          <button
            className={styles.rectangleParent9}
            onClick={onFrameButton13Click}
          >
            <div className={styles.frameChild15} />
            <div className={styles.watch}>Watch</div>
          </button>
          <img
            className={styles.screenshot20230426At6101}
            alt=""
            src="/screenshot-20230426-at-610-2@2x.png"
          />
          <b className={styles.howIOvercameContainer}>
            <p className={styles.blankLine}>
              How I Overcame My Fear of Public Speaking | Danish Dhamani
            </p>
          </b>
          <div className={styles.byTedxTalks}>by Tedx Talks</div>
        </div>
      </div>
      <div className={styles.rectangleParent10}>
        <button
          className={styles.frameChild25}
          onClick={onRectangleButton5Click}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
