import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Card from '@site/src/components/HomepageFeatures/Card';
import Link from '@docusaurus/Link';

type DocMeta = {
  id: string;
  title: string;
  description?: string;
  permalink: string;
};

export default function Home(): JSX.Element {
  const allDocsData = useAllDocsData();
  const docsPlugin = allDocsData['default']; 

  const docItems = (docsPlugin?.versions[0]?.docs as unknown as DocMeta[]) || [];

  return (
    <Layout title="Trang chủ" description="Hiển thị các thẻ từ docs">
      <main className="container margin-vert--lg">
        <div className="row">
          {docItems.map((doc) => (
            <div key={doc.id} className="col col--4 margin-bottom--lg">
              <Card shadow="md">
                <div className="card__header">
                  <h3>{doc.title}</h3>
                </div>
                <div className="card__body">
                  <p>{doc.description}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to={doc.permalink}>
                    Xem chi tiết
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
