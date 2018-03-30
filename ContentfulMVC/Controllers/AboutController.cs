using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContentfulMVC.Models;
using Contentful.Core;
using Contentful.Core.Models;
using Contentful.Core.Search;
using ContentfulMVC.Models.ViewModels;

namespace ContentfulMVC.Controllers
{
    public class AboutController : Controller
    {
        private readonly IContentfulClient _client;
        public AboutController(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IActionResult> Index()
        {
            WhoIAm AAI = new WhoIAm();
            var qb = QueryBuilder<Author>.New.FieldEquals("sys.id", "56WvqVr1oIOGqScqoY6EYK");
            var iqb = QueryBuilder<Pages>.New.FieldEquals("sys.id", "5jnJqcTTW8SQQoa6wS0u8y");
            var pqb = QueryBuilder<Portfolio>.New.FieldEquals("sys.id", "3UsrI0nJzWu8Meiw2AIgE2");
            AAI.Author = (await _client.GetEntries(qb)).FirstOrDefault();
            AAI.Pages = (await _client.GetEntries(iqb)).FirstOrDefault();
            AAI.Portfolio = (await _client.GetEntries(pqb)).FirstOrDefault();
            return View("Index", AAI);
        }
        public async Task<IActionResult> WhoIAm()
        {
            WhoIAm AAI = new WhoIAm();
            var qb = QueryBuilder<Author>.New.FieldEquals("sys.id", "56WvqVr1oIOGqScqoY6EYK");
            var iqb = QueryBuilder<Pages>.New.FieldEquals("sys.id", "5jnJqcTTW8SQQoa6wS0u8y");
            var pqb = QueryBuilder<Portfolio>.New.FieldEquals("sys.id", "3UsrI0nJzWu8Meiw2AIgE2");
            AAI.Author = (await _client.GetEntries(qb)).FirstOrDefault();
            AAI.Pages = (await _client.GetEntries(iqb)).FirstOrDefault();
            AAI.Portfolio = (await _client.GetEntries(pqb)).FirstOrDefault();
            return View("WhoIAm", AAI);
        }
        public async Task<IActionResult> WhatIDo()
        {
            WhoIAm AAI = new WhoIAm();
            var qb = QueryBuilder<Author>.New.FieldEquals("sys.id", "56WvqVr1oIOGqScqoY6EYK");
            var iqb = QueryBuilder<Pages>.New.FieldEquals("sys.id", "5jnJqcTTW8SQQoa6wS0u8y");
            var pqb = QueryBuilder<Portfolio>.New.FieldEquals("sys.id", "3UsrI0nJzWu8Meiw2AIgE2");
            AAI.Author = (await _client.GetEntries(qb)).FirstOrDefault();
            AAI.Pages = (await _client.GetEntries(iqb)).FirstOrDefault();
            AAI.Portfolio = (await _client.GetEntries(pqb)).FirstOrDefault();
            return View("WhatIDo", AAI);
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
