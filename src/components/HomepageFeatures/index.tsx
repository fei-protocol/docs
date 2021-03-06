import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import FeiIcon from "../../icons/FeiIcon";
import TurboIcon from "../../icons/TurboIcon";
import RariIcon from "../../icons/RariIcon";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fei Protocol",
    Svg: FeiIcon,
    description: (
      <>
        Fei is a stablecoin pegged to $1 USD. It powers many of the Tribe DAO's
        services as its liquidity engine.
      </>
    ),
  },
  {
    title: "Turbo",
    Svg: TurboIcon,
    description: (
      <>
        Turbo is a liquidity accelerator that allows any token to become
        productive through the yield generated off a costless line of Fei
        credit.
      </>
    ),
  },
  {
    title: "Rari Capital",
    Svg: RariIcon,
    description: (
      <>
        Permissionless lending and yield with Fuse and Vaults. Rari provides
        critical financial infrastructure to all tokens in DeFi without any
        gatekeeping.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
