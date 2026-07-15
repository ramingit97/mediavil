export interface FrequencyItem {
  city: string;
  fm: string;
  current?: string;
}

export interface MainDetails {
  title: string;
  description: string;
  frequencies: FrequencyItem[];
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  img1: string;
  img2: string;
  img3: string;
  colors?: {
    pageBg: string;
    circleBg: string;
    ringBorder: string;
    ringOutline: string;
    buttonText: string;
    playBg: string;
    cardShadow: string;
    logoColor?: string;
    navShadow: string;

    titleColor?: string;
    descriptionColor?: string;

    mediaBtnBg?: string;
    mediaBtnText?: string;
  };
}

export interface Colors {
  colors: { pageBg: string; btnColor: string; consultBtn?: string };
}
