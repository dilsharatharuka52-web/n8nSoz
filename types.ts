
export interface N8NProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  nodes: string[];
  businessValue: string;
  detailedImplementation: string;
  prerequisites: string[];
  setupSteps: string[];
}

export interface AIWorkflowResponse {
  title: string;
  overview: string;
  nodesNeeded: string[];
  steps: string[];
}
