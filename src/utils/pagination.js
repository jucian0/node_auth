const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const paginatedPayload = (data, entity) => {
  return {
    totalItems: data.totalDocs,
    [entity]: data.docs,
    totalPages: data.totalPages,
    currentPage: data.page - 1,
  };
};

module.exports = { getPagination, paginatedPayload };
