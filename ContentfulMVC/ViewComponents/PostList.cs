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
    public class PostList: ViewComponent
    {
        private readonly IContentfulClient _client;
        public PostList(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
           
            var posts = await _client.GetEntries<Posts>();
            return View(posts);
        }
    }
}
