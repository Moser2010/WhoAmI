using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using ContentfulMVC.Models;

namespace ContentfulMVC.ViewComponents
{
    public class ProjectsList: ViewComponent
    {
        private readonly IContentfulClient _client;
        public ProjectsList(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {


            var projects = await _client.GetEntriesByType<Projects>("projects");
            return View(projects);
        }
    }
}
