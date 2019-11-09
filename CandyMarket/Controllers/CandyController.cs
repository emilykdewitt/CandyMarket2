using System;
using System.Collections.Generic;
using System.Linq;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using CandyMarket.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CandyMarket.Api.Controllers
{
    [ApiController]
    [Route("api/candies")]
    public class CandyController : ControllerBase
    {
        private readonly ILogger<CandyController> _logger;
        private readonly ICandyRepository _repo;

        public CandyController(ILogger<CandyController> logger, ICandyRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public List<Candy> GetAllCandy()
        {
            return _repo.GetAllCandy();
        }

        [HttpGet("{candyId}")]
        public Candy Get(int candyId)
        {
            return _repo.GetAllCandy().FirstOrDefault(candy => candy.CandyId == candyId);
        }

        [HttpPost]
        public IActionResult Add(AddCandyDto newAddCandyDto)
        {
            var newCandy = new Candy
            {
                CandyId = 1,
                Name = newAddCandyDto.Name,
                Category = newAddCandyDto.Category,
                YearsSinceCreation = newAddCandyDto.YearsSinceCreation
            };

            var candyThatGotCreated = _repo.AddCandy(newCandy);

            return Created($"api/candy/{candyThatGotCreated.Name}", candyThatGotCreated);
        }

        [HttpDelete("{candyIdToDelete}/eat")]
        public void Delete(int candyIdToDelete)
        {
            _repo.EatCandy(candyIdToDelete);
        }

        [HttpDelete("{candyIdToDonate}/donate")]
        public void Donate(int candyIdToDonate)
        {
            // todo: make this endpoint behave less greedy and more honest
            _repo.EatCandy(candyIdToDonate);
        }
    }
}
