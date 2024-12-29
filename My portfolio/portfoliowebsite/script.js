document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.portfolio-section');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove "active" class from all sections
        sections.forEach(section => section.classList.remove('active'));
  
        // Add "active" class to the selected section
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
      });
    });
  });