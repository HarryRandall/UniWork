### Self-Organising Teams
- Self-organising teams assign tasks internally, set schedules, and manage deliverables independently.
- Ideal team size: 5-8 members for diverse skills and effective communication.
- **Team Coordination:** Daily scrums keep teams aligned, but co-location and fixed schedules are not always realistic.
- **External Interactions**: Scrum limits developer's external communication; only the ScrumMaster and Product Owner handle these.
- **Product Management:** Teams report progress, often with the ScrumMaster taking on project management duties in practice.
- **Software Product Design:** Driven by unmet needs, dissatisfaction with current products, and new tech.
- **Early focus:** Understand user-desired features.

### Requirements
- Requirements define what a system will do, not how it will do it.
- Defining precise requirements is one of the hardest parts of software development.
- **Common Challenges in Requirements:** Many projects fail due to incomplete requirements, lack of user involvement, resource constraints, and changing specifications. 
- **Communication Issues:** Effective requirements capture and clear communication are crucial to ensure the right system is build.
- **Requirements Process & Pitfalls:** Examples like the Tidbinbilla ticket system show pitfalls in requirements gathering, such as assuming prior knowledge or downplaying specific needs.
- **Key Components of Requirements:** Requirements are essential across project documents, including project plans, architecture, estimations, prototypes, and user manuals.
- **Requirements Engineering**
	- Involves acquiring complete, consistent knowledge and representing it effectively for various stakeholders.
	- Requirements are often split into definitions (broad understanding) and specifications (detailed descriptions).

### The World and The Machine
- **Function Vs. Nonfunctional Requirements**
	- **Functional Requirements:** Describe what the system does, focusing on inputs, outputs, and responses without specifying how it achieves them.
	- **Nonfunctional (Quality Requirements:** Define the quality which the system should perform, such as usability, performance, and security.
- **Key Concepts in Requirements**
	- Requirements focus on what the system should do (not how), to avoid implementation bias.
	- **Domain Knowledge** bridges the environment (real-word context) and the machine (system functionality). 
### Quality Requirements
- **Quality Requirements as Design Criteria**
	- Quality requirements guide choices between implementations and determine acceptability.
	- Examples include confidentiality, reliability, and maintainability.
- **Expressing Quality Requirements**
	- Requirements should be **testable**: use specific, measurable statements rather than general goals.
	- Examples of transformation:
		- **Informal Goal:** "System should be easy to use".
		- **Verifiable Requirement:** "Experienced users shall make no more than two errors daily after two hours of training".
### Interviews
- **Steps:** Identify stakeholders, understand the domain, and uncover needs by interviewing stakeholders and exploring alternatives.
- **Key Stakeholders** include end users, system administrators, engineers, and business managers, among others.
- **Goals of Requirements Interviews:** Define stakeholders, understand their needs, and assess product risks.
- **Interview Follow-up:** Evaluate findings for unexpected insights and generalisable knowledge.
- **Strengths & Weaknesses:**
	- **Strengths:** Reveals stakeholders needs, preferences, and system interactions.
	- **Weaknesses:** Subjectivity, inconsistency, and reliance on interviewer skill.
- **Interview Structure:** Identify information needed, conduct interviews (structured/unstructured), record findings, and validate with interviewees.
- **Effective Questioning:** Focus on current problems and desired solutions; use follow-up questions to clarify and confirm understanding.
- **Capturing vs. Synthesising Requirements:** Requirements come from stakeholders, documents, and synthesised insights. Engineers should anticipate additional needs while validate them.
### Prototypes, Mockups, Stories
- **Purpose:** Help stakeholders clarify their needs and articulate requirements that may be difficult to express verbally.
- **Stakeholder Challenges:** Often unclear or unstated requirements, use of jargon, and hard-to-reach or hidden needs.
- **High-Fidelity Mockup:** Detailed and closer to final design.
- **Low-Fidelity Mockup:** Basic, quick representations used for early feedback
- **Storyboards:** Visual sequences that show interactions within the system, covering key elements like who, what, and how.
	- **Types:** Positive/negative, normal/abnormal scenarios
	- **Advantages:** Provide concrete, narrative-based descriptions; good for identifying objectives and conflicts.
	- **Limitations:** Only capture partial aspects of the system.
- **Story Elements:**
	- **Components:** Players, events, sequences, reasons, and potential issues.
	- Goal: Walk through realistic or hypothetical situations to reveal implicit objectives and desired behaviours.
### Resolving Conflicts & Risks
- Resolving Conflicts in Requirements
	- **Terminology Clash:** Different terms for the same concept (e.g., "borrower" vs. "patron").
	- **Designation Clash:** Same term for different concept (i.e., "user" for library user vs. software user).
	- **Structure Clash:** Different structural representation of the same concept.
	- **Handling Conflicts:** Glossaries can clarify terminology, while negotiation is necessary for strong or weak conflicts due to differing stakeholder goals.
 - **Traceability:** Maintains connections between requirements, showing dependencies and justifications.
 - **Prioritisation:** Considers cost, time, dependencies, and value to determine "nice to have" vs. essential requirements
 - **Risk Management:**
	 - Risk involve uncertain factors that may hinder objectives, measure by likelihood and impact.
	 - **Swiss Cheese Model:** Visualises multiple factors (institutional, team, individual) that can lear to failures.
	 - **Risk Matrix:** Maps risk level based on severity and probability.
	 - **DECIDE Model:** Steps to identify, assess, and address risk systematically.
 - **Configuration Management:**
	 - **Purpose:** Manages changes in a software system to facilitate integration and ensure controlled access for all developers.
	 - **Version Management:** Tracks different versions of components and coordinates multi-developer projects.
	 - **System Integration:** Defines component versions to automate builds.
	 - **Problem Tracking:** Allows reporting and tracking of bugs or issues.
