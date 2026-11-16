import { projects } from './projects.mjs';
import { getFeatured } from './featured.mjs';
import { projectInsights } from './project-insights.mjs';
import { caseStudies } from './project-case-studies.mjs';

// One catalog powers the homepage, library and capability links.
export function getPortfolio(locale = 'ja') {
  const featured = new Map(getFeatured(locale).map(item => [item.id, item]));
  const base = projects.map(project => ({ ...project, featured: featured.get(project.id) }));
  for (const item of featured.values()) {
    if (base.some(project => project.id === item.id)) continue;
    const diagram = !item.review.image;
    base.push({
      id: item.id, name: { [locale]: item.title }, url: item.review.projectUrl || '',
      description: { [locale]: item.description },
      categories: item.id === 'visual-anatomy' ? ['corporate'] : ['systems'],
      image: item.review.image || '/images/cases/' + item.id + '.svg',
      imageWidth: item.review.imageWidth || 1440, imageHeight: item.review.imageHeight || 900,
      imageKind: diagram ? 'diagram' : item.id === 'visual-anatomy' ? 'visual' : 'screen', imageAlt: item.review.imageAlt || '', websiteAvailable: !!item.review.projectUrl,
      featured: item,
    });
  }
  return base.map(project => {
    const study = caseStudies[project.id];
    if (!study) throw new Error('Missing project case study: ' + project.id);
    return {
      ...project, study, insight: projectInsights[project.id],
      title: project.featured?.title || project.name[locale],
      lead: study.lead[locale], strength: study.strength[locale],
      focus: study.focus.map(item => item[locale]),
      role: project.featured?.scope || study.role?.[locale] || '',
      deliverables: (study.deliverables || []).map(item => item[locale]),
    };
  });
}
export const selectedProjectIds = ['digital-certificates', 'flash-reserve', 'backend-audit', 'vivum-sallier', 'visual-anatomy'];
export function orderPortfolio(catalog) {
  const first = [...selectedProjectIds, 'one-pilates', 'blue-square', 'anker', 'hakuhodo-technologies', 'ohora', 'partners'];
  return [...first.map(id => catalog.find(project => project.id === id)).filter(Boolean), ...catalog.filter(project => !first.includes(project.id))];
}
