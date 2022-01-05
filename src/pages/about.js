import React from "react";

import Layout from "../components/Layout";
import Chart from "../components/Chart";
import data from "../data/orgChart";
import Seo from "../components/Seo";

const about = () => {
  return (
    <Layout theme={"light"}>
      <Seo title="Info" description="This is about page" />
      <section className="about">
        <div className="yellow-box">
          <div className="about__text">
            <div className="flex flex-fd-c flex-ai-c wrapper">
              <h1>Siapakah kami?</h1>
              <p>
                Kami merupakan pelajar daripada Unisza Kampus Besut, aliran
                Ijazah Sarjana Muda Sains Komputer (Pembangunan Perisian)
                semester 1 sesi 2021/2022, kursus Penghayatan Etika dan
                Peradaban, kod kursus (MPU 31072) yang dibimbing oleh Prof.
                Madya Dr. Abdullah Ibrahim. Kami dari Kumpulan 3 yang terdiri
                daripada 10 orang ahli telah menjalan projek e-SULAM. Tugasan
                ini telah memberi banyak pengajaran kepada kami, antaranya
                kerjasama antara ahli kumpulan, berdisiplin dalam menyiapkan
                tugasan dan banyak lagi.
              </p>
            </div>
            <h2>Organisasi Seri Putra</h2>
          </div>
        </div>
        <ul className="about__box">
          {data.map(people => {
            const { id, name, position, nickName } = people;
            return (
              <Chart
                key={id}
                name={name}
                position={position}
                helper={nickName}
              />
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default about;
