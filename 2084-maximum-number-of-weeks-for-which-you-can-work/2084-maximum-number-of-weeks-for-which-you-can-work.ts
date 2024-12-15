function numberOfWeeks(milestones: number[]): number {

    const totalMilestones = milestones.reduce((a, b) => a + b, 0); // Calculate total milestones
    const maxMilestones = Math.max(...milestones); // Find the project with the most milestones

    // Check if the largest project dominates
    if (maxMilestones > totalMilestones - maxMilestones) {
        return 2 * (totalMilestones - maxMilestones) + 1;
    }

    // If no project dominates, return the total milestones
    return totalMilestones;
    
};