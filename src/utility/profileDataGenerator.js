const generateProfile = data => {
  if (data) {
    return {
      head: [
        "id",
        "Received Date",
        "Name",
        "In Netherlands",
        "Is refereed",
        "Referred By",
        "Skill",
        "Status",
        "Comment",
        "ExcelId"
      ],
      body: data.map(item => Object.values(item))
    };
  }
};

export default { generateProfile };
