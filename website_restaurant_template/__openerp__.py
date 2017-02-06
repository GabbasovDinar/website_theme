# -*- coding: utf-8 -*-
{
    "name": "Theme for Restaurant Website",
    "summary": """Set your theme for restaurant website""",
    "category": "Website",
    "images": [],
    "version": "1.0.0",

    "author": "IT-Projects LLC, Dinar Gabbasov",
    "website": "https://twitter.com/gabbasov_dinar",
    "license": "LGPL-3",
    "price": 299.00,
    "currency": "EUR",

    "depends": [
        "website",
        "website_sale",
        "website_crm",
        "website_sale",
        "website_blog",
        "website_forum",
    ],
    "external_dependencies": {"python": [], "bin": []},
    "data": [
        "views/website_templates.xml",
        "views/snippets.xml",
    ],
    "demo": [
    ],
    "installable": True,
    "auto_install": False,
}
