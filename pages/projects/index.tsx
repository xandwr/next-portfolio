import { title } from '@/components/primitives'
import { siteConfig } from "@/config/site";
import DefaultLayout from '@/layouts/default'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { useEffect, useState } from 'react';

/// Function props for type annotation
interface ProjectDescriptionProps {
  repoUrl: string;
}

/// Small helper function to retrieve the project desc. of a GitHub repo.
function ProjectDescription({ repoUrl }: ProjectDescriptionProps) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const apiUrl = repoUrl.replace('github.com', 'api.github.com/repos');
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setDescription(data.description);
      } catch (error) {
        console.error('Error fetching description:', error);
        setDescription('Description not available');
      }
    };

    fetchDescription();
  }, [repoUrl]);

  return <p className="sm:text-md text-sm">{description}</p>;
}

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-8 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <h1 className={title()}>My Projects:</h1>
        </div>
        <div className="flex sm:max-w-screen-md max-w-lg flex-row gap-8">
          {siteConfig.projectLinks.map((item) => (
            <Card key={item.href} className="w-full">
              <CardHeader>
                <div>
                  <p className="sm:text-md text-sm font-semibold max-w-[80%]">{item.name}</p>
                  <Link
                    isExternal
                    href={item.href}
                    className="sm:text-sm text-xs text-default-500"
                  >
                    {item.href}
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <ProjectDescription key={item.href} repoUrl={item.sourceHref}/>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href={item.sourceHref}
                  className="sm:text-md text-sm"
                >
                  View source
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  )
}
